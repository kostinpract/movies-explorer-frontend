import React from "react";
import "./Header.css";
import logo from "../../../images/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

function Header({ isLogin }) {
  const location = useLocation();
  const isRestrictedPath = ["/movies", "/saved-movies", "/profile"].includes(
    location.pathname
  );
  return (
    <header
      className={`header ${isLogin && isRestrictedPath ? "header__login" : ""}`}
    >
      <Link to="/" className="header__logo">
        <img src={logo} alt="логотип" />
      </Link>
      {!isLogin ? (
        <div className="header__main">
          <div className="header__menu">
            <div>
              <Link to="/signup" className="header__menu-btn">
                Регистрация
              </Link>
            </div>

            <div>
              <Link
                to="/signin"
                className="header__menu-btn header__menu-btn-enter"
              >
                Войти
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="header__menu-auth">
          <ul className="header__menu-components">
            <li>
              <NavLink to="/movies" className={({isActive}) => !isActive ? "header__menu-btn-film" : "header__menu-btn-film_active"}>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className={({isActive}) => !isActive ? "header__menu-btn" : "header__menu-btn_active"}>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <NavLink to="/profile" className="header__button-account">
            Аккаунт{" "}
          </NavLink>

          <BurgerMenu />
        </div>
      )}
    </header>
  );
}

export default Header;
