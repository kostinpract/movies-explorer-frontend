import React from "react";
import "./Header.css";
import logo from "../../../images/logo.svg";
import { Link, useLocation  } from "react-router-dom";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

function Header({ isLogin }) {
  const location = useLocation();
  const isRestrictedPath = ["/movies", "/saved-movies", "/profile"].includes(location.pathname);
  return (
    <header className={`header ${isLogin && isRestrictedPath ? "header__login" : ""}`}>
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
            <Link to="/movies" className=" header__menu-btn-film">
              Фильмы
            </Link>
          </li>
          <li>
            <Link to="/saved-movies" className="header__menu-btn">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className="header__button-account">
          <p className="header__button-account-name">Аккаунт</p>
        </Link>
        <BurgerMenu />
      </div>
    )}
  </header>
  
  );
}

export default Header;
