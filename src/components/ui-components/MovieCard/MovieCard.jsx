import React, { useState, useContext, useEffect, useMemo } from "react";
import "./MovieCard.css";
import {
  deleteMovieById,
  getSavedMovies,
  createMovie,
} from "../../../utils/MainApi";
import { UserContext } from "../../../services/UserContext/UserContext";

function MovieCard({
  nameEN,
  owner,
  trailerLink,
  thumbnail,
  nameRU,
  country,
  director,
  imageSrc,
  imageAlt,
  movieId,
  duration,
  year,
  description,
  hours,
  minutes,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const { state, setState } = useContext(UserContext);
  const cardisExist = useMemo(() => {
    return state.savedMovies.some((movie) => movie.movieId == movieId);
  }, [movieId, [...state.savedMovies]]);

  useEffect(() => {
    if ([...state.savedMovies].some((movie) => movie.movieId == movieId)) {
      setIsSaved(true);
    }
  }, [[...state.savedMovies]]);


  const toggle = () => {
    if (cardisExist) {
      const cardId = state.savedMovies.find(
        (movie) => movie.movieId == movieId
      );
      deleteMovieById(cardId._id)
        .then((res) => {
          if (res) {
            setState((prevState) => {
              return {
                ...prevState,
                savedMovies: state.savedMovies.filter(
                  (movie) => movie.movieId !== movieId
                ),
              };
            });
            setIsSaved(false);
          }
        })
        .catch((err) => console.error(err));
    } else {
      createMovie({
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN,
        description: description,
        country: country,
        director: director,
        duration: duration,
        trailer: trailerLink,
        thumbnail: thumbnail,
        year: year,
        image: imageSrc,
        owner: owner,
      })
        .then((res) => {
          if (res) {
            console.log(res);
            setState((prevState) => {
              return {
                ...prevState,
                savedMovies: [...prevState.savedMovies].concat(res.data),
              };
            });
            setIsSaved(true);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-card__info">
        <p className="movie-card__title">{nameRU}</p>
        <p className="movie-card__duration">{`${hours}ч ${minutes}м`}</p>
        <button
          className={`movie-card__like-button 
          movie-card__like-button_type_${isSaved ? "active" : "non-active"}`}
          type="button"
          onClick={() => {
            toggle();
          }}
        ></button>
      </div>

      <img className="movie-card__movie-cover" src={imageSrc} alt={imageAlt} />
    </li>
  );
}

export default MovieCard;
