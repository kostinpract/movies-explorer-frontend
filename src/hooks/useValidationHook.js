import { useCallback, useState } from "react";
import { errorType } from "../utils/constants";

export default function useFormValidatorHook() {
  const [inputValues, setInputValues] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const setErrorMessage = (name, errorMessage) => {
    setInputErrors({ ...inputErrors, [name]: errorMessage });
  };

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    setInputValues((prevState) => {
      return { ...prevState, [name]: value };
    });

    setInputErrors((prevState) => {
      return { ...prevState, [name]: target.validationMessage };
    });

    setIsFormValid(target.closest("form").checkValidity());

    switch (name) {
      case "name":
        {
          if (target.validity.valueMissing) {
            setErrorMessage(name, errorType.valueMissing.default);
          }
          if (target.validity.typeMismatch) {
            setErrorMessage(name, errorType.typeMismatch.name);
          }
        }
        break;
      case "email":
        {
          if (target.validity.valueMissing) {
            setErrorMessage(name, errorType.valueMissing.default);
          }
          if (target.validity.typeMismatch) {
            setErrorMessage(name, errorType.typeMismatch.email);
          }
        }
        break;
      case "password": {
        if (target.validity.valueMissing) {
          setErrorMessage(name, errorType.valueMissing.default);
        }
        if (target.validity.tooShort) {
          setErrorMessage(name, errorType.tooShort);
        }
      }
      case "search":
        if (target.validity.valueMissing.default) {
          setErrorMessage(name, errorType.valueMissing.search);
        }
        break;
    }
  };

  const resetForm = useCallback(
    (newInputValues = {}, newErrors = {}, newIsValid = false) => {
      setInputValues(newInputValues);
      setInputErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setInputValues, setInputErrors, setIsFormValid]
  );

  return {
    inputValues,
    setInputValues,
    inputErrors,
    isFormValid,
    handleChange,
    resetForm,
  };
}