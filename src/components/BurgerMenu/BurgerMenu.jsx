import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import burger from "../../images/burger.svg";
import krest from "../../images/Krest.svg";
import "./BurgerMenu.css";
function BurgerMenu() {
  const [isMenu, setMenu] = useState(false);
  const handleMenuClick = () => {
    setMenu(!isMenu);
  };

  const handleMenuClose = () => {
    setMenu(false);
  };
  return (
    <aside className="burger">
      <div
        className={`burger__menu-button ${
          isMenu ? "burger__menu-button_state_active burger__overlay" : ""
        }`}
        onClick={handleMenuClick}
      >
        <img className="burger__icon" src={burger} alt="меню" />
      </div>
      <div
        className={`burger__menu ${isMenu ? "burger__menu_state_active" : ""}`}
      >
        <div className="burger__close" onClick={handleMenuClose}>
          <img src={krest} alt="меню" />
        </div>
        <ul className="burger__imems">
          <li>
            <NavLink to="/" className="burger__text">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="burger__text">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className="burger__text">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <p className="burger__account-name">
          <NavLink to="/profile" className="burger__account">
            Аккаунт
          </NavLink>
        </p>
      </div>
    </aside>
  );
}

export default BurgerMenu;
