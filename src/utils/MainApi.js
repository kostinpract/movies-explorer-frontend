import { baseUrl } from "./constants";
import { checkResponse } from "./constants";
import { getCookie } from "../utils/cookie";

export const signIn = ({ email, password }) => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  return fetch(`${baseUrl}/signin`, requestOptions).then(checkResponse);
};

export const signUp = ({ email, password, name }) => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  };

  return fetch(`${baseUrl}/signup`, requestOptions).then(checkResponse);
};

export const getAuthUserInfo = () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/users/me`, requestOptions).then(checkResponse);
};

export const refreshUserData = ({ name, email }) => {
  const requestOptions = {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };

  return fetch(`${baseUrl}/users/me`, requestOptions).then(checkResponse);
};


export const getSavedMovies = () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/movies`, requestOptions).then(checkResponse);
};

export const createMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
}) => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: image,
      trailer: trailer,
      thumbnail: thumbnail,
      movieId: movieId,
      nameRU: nameRU,
      nameEN: nameEN,
    }),
  };

  return fetch(`${baseUrl}/movies`, requestOptions).then(checkResponse);
};

export const deleteMovieById = (cardId) => {
  const requestOptions = {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/movies/${cardId}`, requestOptions).then(checkResponse);
};
