import React from 'react';
import "./AboutMe.css";
import photo from "../../../images/profilePhoto.png";

function AboutMe() {

  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <img src={photo} alt="photos" className="about-me__photo" />
        <div className="about-me__infoContainer">
          <h2 className="about-me__infoContainerName">
          Виталий
          </h2>
          <p className="about-me__infoContainerPos">
          Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__infoContainerAbout">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__infoLink" href="#">
            <p className="about-me__infoGit">Github</p>
          </a>
        </div>
      </div>
    </section>
  );

}

export default AboutMe;