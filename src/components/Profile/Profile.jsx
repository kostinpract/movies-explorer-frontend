import "./Profile.css";
import ProfileInput from "../ui-components/ProfileInput/ProfileInput";
import Title from "../ui-components/Title/Title";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../utils/cookie";
import { useContext, useState, useEffect, useMemo } from "react";
import useValidationHook from "../../utils/hooks/useValidationHook";
import { UserContext } from "../../services/UserContext/UserContext";
import { refreshUserData } from "../../utils/MainApi";

function Profile() {
  const { state, setState } = useContext(UserContext);
  const navigate = useNavigate();
  const { values, handleFormChange, setValues, errors, isFormValid } =
    useValidationHook();

  useEffect(() => {
    setValues((prevState) => {
      return {
        ...prevState,
        name: state?.userData?.name,
        email: state?.userData?.email,
      };
    });
  }, [state?.userData?.name, state?.userData?.email]);

  const disabledButton = useMemo(() => {
    return (
      (values?.name == state?.userData?.name &&
        values?.email == state?.userData?.email) ||
      !isFormValid
    );
  }, [
    values?.name,
    values?.email,
    state?.userData?.name,
    state?.userData?.email,
  ]);

  const logout = (e) => {
    e.preventDefault();
    deleteCookie("token");
    setState((prevState) => {
      return {
        ...prevState,
        isAuth: false,
        userData: null,
        _id: null,
      };
    });
    navigate("/");
  };

  const submitUserData = (e) => {
    e.preventDefault();
    refreshUserData({ name: values?.name, email: values?.email })
      .then((res) => {
        setState((state) => {
          return {
            ...state,
            userData: {
              name: res.name,
              email: res.email,
            },
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="profile-section">
      <div className="profile-section__container">
        <Title
          extraClass="profile-section__title"
          content={`Привет, ${state?.userData?.name}`}
        />
        <form
          onSubmit={(e) => submitUserData(e)}
          className="profile-section__form"
          action=""
        >
          <div className="profile-section__inputs-container">
            <ProfileInput
              value={state?.userData?.name}
              onChange={handleFormChange}
              placeholder="Имя"
              isRequired={true}
              type="text"
              name="name"
              inputTitle="Имя"
              validationError={errors?.name}
            />
            <div className="profile-section__dividing-line" />
            <ProfileInput
              inputTitle="E-mail"
              type="email"
              value={state?.userData?.email}
              onChange={handleFormChange}
              isRequired={true}
              name="email"
              validationError={errors.email}
              placeholder="E-mail"
            />
          </div>
          <button
            className="profile-section__submit-button"
            type="submit"
            disabled={disabledButton}
          >
            Редактировать
          </button>
        </form>
        <button
          onClick={(e) => logout(e)}
          type="button"
          className="profile-section__logout-btn"
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
