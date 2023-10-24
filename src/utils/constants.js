export const baseUrl = "http://localhost:3000";
export const allMoviesUrl = "https://api.nomoreparties.co";
export const cookieExpiredTime = 10000;

export const errorType = {
  valueMissing: {
    default: "Это обязательное поле",
    search: "Введите ключевое слово",
  },
  typeMismatch: {
    name: "Это поле принимает только латиницу, кириллицу, пробел или дефис.",
    email: "Введите корректный email",
  },
  tooShort: "Пароль должен состоять минимум из 8 символов",
};

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(res);
};

export const countMovieDuration = (duration) => {
  const hours = parseInt(duration / 60);
  const minutes = duration % 60;

  return { hours, minutes };
};

export const getFilteredMovies = (moviesArray, request) => {
  if (!moviesArray?.length || !request) return [];
  return moviesArray.filter((movie) =>
    movie.nameRU.toLowerCase().includes(request.toLowerCase())
  );
};
export const getShortMovies = (moviesArray) => {
  if (!moviesArray?.length) return [];
  return moviesArray.filter((el) => el.duration <= 40);
};
