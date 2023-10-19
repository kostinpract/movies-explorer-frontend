import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchFormSection from "../ui-components/SearchFormSection/SearchFormSection";
import MovieCard from "../ui-components/MovieCard/MovieCard";
import useLazyLoadHook from "../../utils/hooks/useLazyLoadHook";
import { getAllMovies } from "../../utils/MoviesApi";
import {
  allMoviesUrl,
  countMovieDuration,
  getFilteredMovies,
  getShortMovies,
} from "../../utils/constants";
import useValidationHook from "../../utils/hooks/useValidationHook";

function Movies({ isCheckboxClicked, setIsCheckboxClicked, owner }) {
  const cardsAmount = useLazyLoadHook();
  const [savedMovies, setSavedMovies] = useState([]);
  const [cardsData, setCardsData] = useState({
    allCards: [],
    filteredCards: [],
  });
  const { values, handleFormChange } = useValidationHook();

  const setCardsDataFromScratch = (moviesArray) => {
    if (!moviesArray?.length) {
      setCardsData((prevState) => {
        return {
          ...prevState,
          allCards: [],
          filteredCards: [],
        };
      });
    } else {
      setCardsData((prevState) => {
        return {
          ...prevState,
          allCards: [...moviesArray],
          filteredCards: [...moviesArray].slice(0, cardsAmount.default),
        };
      });
    }
  };

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setSavedMovies(() => {
          return res;
        });
      })
      .catch((err) => console.error(err));
  }, []);

  // set all cards for first screen
  useEffect(() => {
    if (localStorage.getItem("searchMovieInput")) {
      const filteredMovies = getFilteredMovies(
        savedMovies,
        localStorage.getItem("searchMovieInput")
      );
      if (isCheckboxClicked) {
        const filteredShortMovies = getShortMovies(filteredMovies);
        setCardsDataFromScratch(filteredShortMovies);
      } else {
        setCardsDataFromScratch(filteredMovies);
      }
    } else {
      if (isCheckboxClicked) {
        const filteredShortMovies = getShortMovies(savedMovies);
        setCardsDataFromScratch(filteredShortMovies);
      } else setCardsDataFromScratch(savedMovies);
    }
  }, [savedMovies]);

  // set all cards every time allCards amount is changed
  useEffect(() => {
    setCardsData((prevState) => {
      return {
        ...prevState,
        filteredCards: [...cardsData.allCards].slice(0, cardsAmount.default),
      };
    });
  }, [cardsData.allCards]);

  useEffect(() => {
    const requestedValue = localStorage.getItem("searchMovieInput");

    if (!requestedValue) {
      const filteredShortMovies = getShortMovies(savedMovies);
      setCardsDataFromScratch(
        isCheckboxClicked ? filteredShortMovies : savedMovies
      );
    } else {
      const filteredMovies = getFilteredMovies(savedMovies, requestedValue);
      const filteredShortMovies = getShortMovies(filteredMovies);
      setCardsDataFromScratch(
        isCheckboxClicked === true ? filteredShortMovies : filteredMovies
      );
    }
  }, [isCheckboxClicked]);

  const onSearchSubmit = () => {
    localStorage.setItem("searchMovieInput", values.search);

    if (values.search === "") {
      if (!isCheckboxClicked) {
        setCardsDataFromScratch(savedMovies);
      } else {
        const filteredShortMovies = getShortMovies(savedMovies);
        setCardsDataFromScratch(filteredShortMovies);
      }
    } else {
      const filteredMovies = getFilteredMovies(savedMovies, values.search);
      if (!isCheckboxClicked) {
        setCardsDataFromScratch(filteredMovies);
      } else {
        const filteredShortMovies = getShortMovies(filteredMovies);
        setCardsDataFromScratch(filteredShortMovies);
      }
    }
  };

  return (
    <section className="movies">
      <SearchFormSection
        onSubmit={(e) => {
          e.preventDefault();
          onSearchSubmit();
        }}
        defaultValue={
          localStorage.getItem("searchMovieInput") !== null
            ? localStorage.getItem("searchMovieInput")
            : ""
        }
        onChange={handleFormChange}
        isCheckboxClicked={isCheckboxClicked}
        setIsCheckboxClicked={setIsCheckboxClicked}
      />
      <section className="movies__card-section">
        {cardsData.filteredCards.length
          ? [...cardsData.filteredCards].map((el) => {
              const movieDuration = countMovieDuration(el.duration);
              return (
                <MovieCard
                  owner={owner}
                  key={el.id}
                  movieId={el.id}
                  nameRU={el.nameRU}
                  nameEN={el.nameEN}
                  country={el.country}
                  director={el.director}
                  duration={el.duration}
                  year={el.year}
                  trailerLink={el.trailerLink}
                  description={el.description}
                  thumbnail={`https://api.nomoreparties.co/${el?.image?.format?.thumbnail?.url}`}
                  imageSrc={`${allMoviesUrl}/${el.image.url}`}
                  imageAlt={el.nameEN}
                  hours={movieDuration?.hours}
                  minutes={movieDuration?.minutes}
                />
              );
            })
          : null}
      </section>
      {cardsData.filteredCards.length < cardsData.allCards.length && (
        <button
          type="button"
          className="movies__more-button"
          onClick={() => {
            setCardsData((prevState) => {
              return {
                ...prevState,
                filteredCards: [...prevState.filteredCards].concat(
                  [...cardsData.allCards].slice(
                    cardsData.filteredCards.length,
                    cardsData.filteredCards.length + cardsAmount.additional
                  )
                ),
              };
            });
          }}
        >
          Еще
        </button>
      )}
    </section>
  );
}

export default Movies;
