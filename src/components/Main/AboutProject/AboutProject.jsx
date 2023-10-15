import React from 'react';
import "./AboutProject.css";

function AboutProject() {

  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__info">
        <li className="about-project__info_item">
          <h3 className="about-project__info_title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info_description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__info_item">
          <h3 className="about-project__info_title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info_description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__progress">
        <p className="about-project__progress-bar about-project__progress-bar-1week">1 неделя</p>
        <p className="about-project__progress-bar about-project__progress-bar-4week">4 недели</p>
        <p className="about-project__progress-text about-project__progress-text-back">Back-end</p>
        <p className="about-project__progress-text about-project__progress-text-front">Front-end</p>
      </div>
    </section>
  );

}

export default AboutProject;