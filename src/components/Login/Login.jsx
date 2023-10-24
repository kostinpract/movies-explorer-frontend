import "./Login.css";
import React, { useState, useEffect } from "react";
import Input from "../ui-components/Input/Input";
import SubmitButton from "../ui-components/SubmitButton/SubmitButton";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import useValidationHook from "../../utils/hooks/useValidationHook";
import { getCookie, setCookie } from "../../utils/cookie";
import { signIn } from "../../utils/MainApi";
import { cookieExpiredTime } from "../../utils/constants";

function Login() {
  const { values, handleFormChange, errors, isFormValid } = useValidationHook();
  const [isError, setError] = useState({ isError: false, errorMessage: "" });
  const token = getCookie("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate(-1);
    }
  }, [token]);
  const submit = (e) => {
    e.preventDefault();
    signIn({ email: values.email, password: values.password })
      .then((res) => {
        if (res) {
          setError({ isError: false, errorMessage: "" });
          setCookie("token", res.token, cookieExpiredTime);
          localStorage.setItem("searchMovieInput", "");
          localStorage.setItem("isMovieShort", false);
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err.status == 401) {
          setError({
            isError: true,
            errorMessage: "Неправильные почта или пароль",
          });
        }
        if (err.status == 404) {
          setError({
            isError: true,
            errorMessage: "Проверьте подключение к интернету",
          });
        }
      });
  };
  return (
    <section className="login-section">
      <div className="login-section__container">
        <Link to="/">
          <img className="login-section__logo" src={logo} alt="лого" />
        </Link>
        <h1 className="login-section__title">Рады видеть!</h1>
        <form className="login-section__form" onSubmit={(e) => submit(e)}>
          <Input
            inputTitle="E-mail"
            type="email"
            isRequired={true}
            name="email"
            value={values.email}
            onChange={handleFormChange}
            placeholder="E-mail"
            validationError={errors?.email}
          />

          <Input
            inputTitle="Пароль"
            type="password"
            isRequired={true}
            name="password"
            value={values.password}
            onChange={handleFormChange}
            placeholder="Пароль"
            minLength={8}
            validationError={errors?.password}
          />
          {isError.isError ? (
            <span className="login-section__error">{isError.errorMessage}</span>
          ) : null}
          <SubmitButton
            extraClass="login-section__submit-button"
            content="Войти"
            type="submit"
            isDisabled={!isFormValid}
          />
        </form>
        <div className="login-section__register">
          <p className="login-section__register-caption">
            Ещё не зарегистрированы?
          </p>
          <Link to="/signup" className="login-section__link">
            <p className="login-section__register-link">Регистрация</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
