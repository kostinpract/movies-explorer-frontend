import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__container">
        <div className="portfolio__card">
          <p className="portfolio__cardTitle">Статичный сайт</p>
          <a href="#">
            <img src={arrow} alt="arrow" className="portfolio__arrow" />
          </a>
        </div>
        <div className="portfolio__card portfolio__cardTitleAbs">
          <p className="portfolio__cardTitle">Адаптивный сайт</p>
          <a href="#">
            <img src={arrow} alt="arrow" className="portfolio__arrow" />
          </a>
        </div>
        <div className="portfolio__card">
          <p className="portfolio__cardTitle">Одностраничное приложение</p>
          <a href="#">
            <img src={arrow} alt="arrow" className="portfolio__arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
