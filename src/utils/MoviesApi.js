import { allMoviesUrl, checkResponse } from "./constants";

export const getAllMovies = () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${allMoviesUrl}/beatfilm-movies`, requestOptions).then(checkResponse);
};