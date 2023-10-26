import React, { useState, useEffect } from "react";
import "./Register.css";
import Input from "../ui-components/Input/Input";
import SubmitButton from "../ui-components/SubmitButton/SubmitButton";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { signUp, signIn } from "../../utils/MainApi.js";
import { getCookie, setCookie } from "../../utils/cookie";
import { cookieExpiredTime } from "../../utils/constants";
import useValidationHook from "../../utils/hooks/useValidationHook";

function Register() {
  const { values, isFormValid, handleFormChange, errors } = useValidationHook();
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
    signUp({
      email: values.email,
      password: values.password,
      name: values.name,
    })
      .then((res) => {
        if (res._id !== undefined) {
          signIn({ email: values.email, password: values.password })
            .then((res) => {
              if (res) {
                setCookie("token", res.token, cookieExpiredTime);
                navigate("/movies");
              }
            })
            .catch((err) => console.error(err));
        }
        setError({ isError: false, errorMessage: "" });
      })
      .catch((err) =>
        err.status == 409
          ? setError({
              isError: true,
              errorMessage: "такой пользователь уже существует",
            })
          : setError({ isError: true, errorMessage: "ошибка валидации" })
      );
  };
  return (
    <section className="register-section">
      <div className="register-section__container">
        <Link to="/">
          <img className="register-section__logo" src={logo} alt="лого" />
        </Link>
        <h1 className="register-section__title">Добро пожаловать!</h1>
        <form
          onSubmit={(e) => submit(e)}
          className="register-section__form"
          noValidate
        >
          <Input
            value={values.name}
            onChange={handleFormChange}
            placeholder="Имя"
            isRequired={true}
            type="text"
            name="name"
            inputTitle="Имя"
            validationError={errors?.name}
          />
          <Input
            isRequired={true}
            value={values.email}
            onChange={handleFormChange}
            placeholder="E-mail"
            name="email"
            type="email"
            inputTitle="E-mail"
            validationError={errors?.email}
          />
          <Input
            isRequired={true}
            value={values.password}
            onChange={handleFormChange}
            placeholder="Пароль"
            type="password"
            name="password"
            validationError={errors?.password}
            inputTitle="Пароль"
            minLength={8}
          />
          {isError.isError ? (
          <span className="register-section__error">{isError.errorMessage}</span>
        ) : null}
          <SubmitButton
            isDisabled={!isFormValid}
            extraClass="register-section__submit-button"
            content="Зарегистрироваться"
            click={(e) => submit(e)}
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
