import React from "react";
import "./Register.css";
import Input from "../ui-components/Input/Input";
import SubmitButton from "../ui-components/SubmitButton/SubmitButton";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register-section">
      <div className="register-section__container">
        <Link to="/">
          <img className="register-section__logo" src={logo} alt="лого" />
        </Link>
        <h1 className="register-section__title">Добро пожаловать!</h1>
        <form className="register-section__form">
          <Input placeholder="Имя" type="text" inputTitle="Имя" />
          <Input placeholder="E-mail" type="email" inputTitle="E-mail" />
          <Input placeholder="Пароль" type="password" inputTitle="Пароль" />
          <SubmitButton
            extraClass="register-section__submit-button"
            content="Зарегистрироваться"
          />
        </form>
        <div className="register-section__login">
          <p className="register-section__login-caption">
            Уже зарегистрированы?
          </p>
          <Link to="/signin" className="register-section__login-link">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
