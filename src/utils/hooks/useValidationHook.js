import { validate } from "react-email-validator";
import { useCallback, useState } from "react";

const useValidationHook = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const setErrorMessage = (name, errorMessage) => {
    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleFormChange = (event) => {
    const target = event.target;
    const form = target.closest("form");

    setValues((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });

    setErrors((prevState) => {
      return { ...prevState, [target.name]: target.validationMessage };
    });

    setIsFormValid(() => {
      return form.checkValidity();
    });

    switch (target.name) {
      case "name":
        {
          if (target.validity.valueMissing) {
            setErrorMessage(target.name, "Это поле не может быть пустым");
          }
          if (target.validity.patternMismatch) {
            setErrorMessage(
              target.name,
              "Это поле принимает только латиницу, кириллицу, пробел или дефис"
            );
          }
        }
        break;
      case "email":
        {
          if (target.validity.valueMissing) {
            setErrorMessage(target.name, "Это поле не может быть пустым");
          }
          if (target.validity.typeMismatch) {
            setErrorMessage(target.name, "Некорректный email");
          }

          const input = form
            .querySelector("label[for='email']")
            .getElementsByTagName("input")[0];

          if (!validate(values.email)) {
            input.setCustomValidity("Некорректный email");
          } else input.setCustomValidity("");
        }
        break;
      case "password":
        {
          if (target.validity.valueMissing) {
            setErrorMessage(target.name, "Поле не может быть пустым");
          }
          if (target.validity.tooShort) {
            setErrorMessage(
              target.name,
              "Пароль должен быть длиной не менее 6 символов"
            );
          }
        }
        break;
      case "search":
        if (target.validity.valueMissing.default) {
          setErrorMessage(target.name, "Введите ключевое слово");
        }
        break;
    }
  };

  const resetFormValues = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return {
    values,
    setValues,
    errors,
    isFormValid,
    handleFormChange,
    resetFormValues,
  };
};

export default useValidationHook;
