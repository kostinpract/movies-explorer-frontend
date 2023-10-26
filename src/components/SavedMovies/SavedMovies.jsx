import "./SavedMovies";
import React, { useContext, useEffect, useState } from "react";
import SearchFormSection from "../ui-components/SearchFormSection/SearchFormSection";
import MovieCard from "../ui-components/MovieCard/MovieCard";
import {
  countMovieDuration,
  getFilteredMovies,
  getShortMovies,
} from "../../utils/constants";
import useValidationHook from "../../utils/hooks/useValidationHook";
import { UserContext } from "../../services/UserContext/UserContext";

function SavedMovies({ owner }) {
  const { state, setState } = useContext(UserContext);
  const { savedMovies } = state;
  const [cardsData, setCardsData] = useState({
    allCards: [],
    filteredCards: [],
  });
  const { values, handleFormChange } = useValidationHook();
  const [filterParams, setFilterParams] = useState({
    requestedMovie: "",
    isCheckboxClicked: false,
  });

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
          filteredCards: [...moviesArray],
        };
      });
    }
  };

  // set all cards for first screen
  useEffect(() => {
    if (!filterParams.requestedMovie) {
      if (filterParams.isCheckboxClicked) {
        const filteredShortMovies = getShortMovies(savedMovies);
        setCardsDataFromScratch(filteredShortMovies);
      } else setCardsDataFromScratch(savedMovies);
    } else {
      if (!filterParams.isCheckboxClicked) {
        const filteredMovies = getFilteredMovies(
          savedMovies,
          filterParams?.requestedMovie
        );
        setCardsDataFromScratch(filteredMovies);
      } else {
        const filteredShortMovies = getShortMovies(savedMovies);
        setCardsDataFromScratch(filteredShortMovies);
      }
    }
  }, [savedMovies, filterParams.requestedMovie]);

  // set all cards every time allCards amount is changed
  useEffect(() => {
    setCardsData((prevState) => {
      return {
        ...prevState,
        filteredCards: [...cardsData.allCards],
      };
    });
  }, [cardsData.allCards]);

  useEffect(() => {
    if (!filterParams.requestedMovie) {
      const filteredShortMovies = getShortMovies(savedMovies);
      setCardsDataFromScratch(
        filterParams.isCheckboxClicked ? filteredShortMovies : savedMovies
      );
    } else {
      const filteredMovies = getFilteredMovies(
        savedMovies,
        filterParams?.requestedMovie
      );
      const filteredShortMovies = getShortMovies(filteredMovies);
      setCardsDataFromScratch(
        filterParams.isCheckboxClicked === true
          ? filteredShortMovies
          : filteredMovies
      );
    }
  }, [filterParams.isCheckboxClicked]);

  const onSearchSubmit = () => {
    setFilterParams((prevState) => {
      return {
        ...prevState,
        requestedMovie: values.search,
      };
    });

    if (values.search === "") {
      if (!filterParams.isCheckboxClicked) {
        setCardsDataFromScratch(savedMovies);
      } else {
        const filteredShortMovies = getShortMovies(savedMovies);
        setCardsDataFromScratch(filteredShortMovies);
      }
    } else {
      const filteredMovies = getFilteredMovies(savedMovies, values.search);
      if (!filterParams.isCheckboxClicked) {
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
        defaultValue={filterParams.requestedMovie}
        onChange={handleFormChange}
        isCheckboxClicked={filterParams.isCheckboxClicked}
        setIsCheckboxClicked={() => {
          setFilterParams((prevState) => {
            return {
              ...prevState,
              isCheckboxClicked: !prevState.isCheckboxClicked,
            };
          });
        }}
      />
      <section className="movies__card-section">
        {cardsData.filteredCards.length ? (
          [...cardsData.filteredCards].map((el) => {
            const movieDuration = countMovieDuration(el.duration);
            return (
              <MovieCard
                isCardSaved={true}
                owner={owner}
                key={el._id}
                movieId={el.movieId}
                nameRU={el.nameRU}
                nameEN={el.nameEN}
                country={el.country}
                director={el.director}
                duration={el.duration}
                year={el.year}
                trailerLink={el.trailerLink}
                description={el.description}
                thumbnail={`https://api.nomoreparties.co/${el?.image?.format?.thumbnail?.url}`}
                imageSrc={el.image}
                imageAlt={el.nameEN}
                hours={movieDuration?.hours}
                minutes={movieDuration?.minutes}
              />
            );
          })
        ) : (
          <p>Фильмы не найдены</p>
        )}
      </section>
    </section>
  );
}

export default SavedMovies;
