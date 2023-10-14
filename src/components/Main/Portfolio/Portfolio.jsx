import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__container">
        <a className="portfolio__link" target="_blank" href="https://github.com/kostinpract/how-to-learn">
          <div className="portfolio__card">
            <p className="portfolio__cardTitle">Статичный сайт</p>
            <img src={arrow} alt="arrow" className="portfolio__arrow" />
          </div>
        </a>
        <a className="portfolio__link" target="_blank" href="https://github.com/kostinpract/russian-travel">
          <div className="portfolio__card portfolio__cardTitleAbs">
            <p className="portfolio__cardTitle">Адаптивный сайт</p>
            <img src={arrow} alt="arrow" className="portfolio__arrow" />

          </div>
        </a>
        <a className="portfolio__link" target="_blank" href="https://github.com/kostinpract/mesto">
          <div className="portfolio__card">
            <p className="portfolio__cardTitle">Одностраничное приложение</p>
            <img src={arrow} alt="arrow" className="portfolio__arrow" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
