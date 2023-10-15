import React from 'react';
import "./Promo.css";

function Promo() {

  return (
    <section className="promo">
      <h2 className="promo__title">Учебный проект студента факультета Веб-разработки</h2>
      <ul className="promo__menu">
        <li className="promo__menu-item">О проекте</li>
        <li className="promo__menu-item">Технологии</li>
        <li className="promo__menu-item">Студент</li>
      </ul>
    </section>
  );

}

export default Promo;