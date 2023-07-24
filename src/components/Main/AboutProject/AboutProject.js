import React from 'react';
import "./AboutProject.css";

function AboutProject() {

  return (
    <section class="about-project">
      <h2 class="about-project__title">О проекте</h2>
      <ul class="about-project__info">
        <li class="about-project__info_item">
          <h3 class="about-project__info_title">Дипломный проект включал 5 этапов</h3>
          <p class="about-project__info_description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li class="about-project__info_item">
          <h3 class="about-project__info_title">На выполнение диплома ушло 5 недель</h3>
          <p class="about-project__info_description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div class="about-project__progress">
        <p class="about-project__progress-bar about-project__progress-bar-1week">1 неделя</p>
        <p class="about-project__progress-bar about-project__progress-bar-4week">4 недели</p>
        <p class="about-project__progress-text about-project__progress-text-back">Back-end</p>
        <p class="about-project__progress-text about-project__progress-text-front">Front-end</p>
      </div>
    </section>
  );

}

export default AboutProject;