import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { UserContext } from "../../services/UserContext/UserContext";
import Page from "../Page/Page";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Page404 from "../Page404/Page404";
import { getAuthUserInfo, getSavedMovies } from "../../utils/MainApi";
import { getCookie } from "../../utils/cookie";
import { ProtectedRoute } from "../../services/ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const { state, setState } = useContext(UserContext);
  const token = getCookie("token");

  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isMovieShort")) {
      if (localStorage.getItem("isMovieShort") === "false") {
        setIsCheckboxClicked(() => false);
      } else {
        setIsCheckboxClicked(() => true);
      }
    }
    if (token) {
      getSavedMovies()
        .then((res) =>
          setState((prevState) => {
            return {
              ...prevState,
              savedMovies: res,
            };
          })
        )
        .catch((err) => console.error(err));
      getAuthUserInfo()
        .then((res) => {
          const { name, email, _id } = res;
          setState((prevState) => {
            return {
              ...prevState,
              isAuth: true,
              userData: {
                email: email,
                name: name,
              },
              _id: _id,
            };
          });
        })
        .catch((err) => console.error(err));
    }
  }, [token]);

  const toggleCheckboxState = () => {
    setIsCheckboxClicked(!isCheckboxClicked);
    localStorage.setItem("isMovieShort", !isCheckboxClicked);
  };

  return (
    <UserContext.Provider value={{ state, setState }}>
      <Routes>
        <Route path="/">
          <Route element={<Page isLogin={state.isAuth} />}>
            <Route index element={<Main />} />
            <Route
              path="movies"
              element={
                <ProtectedRoute location={location} isAuth={state.isAuth}>
                  <Movies
                    owner={state._id}
                    setIsCheckboxClicked={toggleCheckboxState}
                    isCheckboxClicked={isCheckboxClicked}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="saved-movies"
              element={
                <ProtectedRoute location={location} isAuth={state.isAuth}>
                  <SavedMovies
                    owner={state._id}
                    setIsCheckboxClicked={toggleCheckboxState}
                    isCheckboxClicked={isCheckboxClicked}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute location={location} isAuth={state.isAuth}>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="signup" element={<Register location={location} />} />
          <Route path="signin" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
