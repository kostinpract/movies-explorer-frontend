import React from "react";
import "./Login.css";
import Input from "../ui-components/Input/Input";
import SubmitButton from "../ui-components/SubmitButton/SubmitButton";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login-section">
      <div className="login-section__container">
        <Link to="/">
          <img className="login-section__logo" src={logo} alt="лого" />
        </Link>
        <h1 className="login-section__title">Рады видеть!</h1>
        <form className="login-section__form">
          <Input placeholder="E-mail" type="email" inputTitle="E-mail" />
          <Input placeholder="Пароль" type="password" inputTitle="Пароль" />
          <SubmitButton
            extraClass="login-section__submit-button"
            content="Войти"
          />
        </form>
        <div className="login-section__register">
          <p className="login-section__register-caption">
            Ещё не зарегистрированы?
          </p>
          <Link to="/signup" className="login-section__link">
            <p className="login-section__register-link">
              Регистрация
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;

