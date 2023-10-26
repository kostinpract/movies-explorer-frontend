import "./Input.css";

function Input({
  inputTitle,
  name,
  type,
  value,
  placeholder,
  onChange,
  isRequired,
  minLength,
  validationError,
}) {
  return (
    <label className="input-component__label" htmlFor={name}>
      <p className="input-component__title">{inputTitle}</p>
      <input
        onChange={onChange}
        className="input-component__input"
        type={type}
        name={name}
        minLength={minLength}
        placeholder={placeholder}
        defaultValue={value}
        required={isRequired}
        pattern={name === "name" ? "^([А-Яа-яA-Za-z \\-])+$" : undefined}
      />
      <span className="input-component__error">{validationError}</span>
    </label>
  );
}

export default Input;
