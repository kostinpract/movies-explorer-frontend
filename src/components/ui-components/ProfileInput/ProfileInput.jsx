import "./ProfileInput.css";

function ProfileInput({
  inputTitle,
  name,
  type,
  value,
  placeholder,
  isRequired,
  onChange,
  minLength,
  validationError,
}) {
  return (
    <label className="profile-input-component__label" htmlFor={name}>
      <p className="profile-input-component__title">{inputTitle}</p>
      <input
        onChange={onChange}
        className="profile-input-component__input"
        type={type}
        name={name}
        minLength={minLength}
        placeholder={placeholder}
        defaultValue={value}
        required={isRequired}
        pattern={name === "name" ? "^([А-Яа-яA-Za-z \\-])+$" : undefined}
      />
      <span className="profile-input-component__error">{validationError}</span>
    </label>
  );
}

export default ProfileInput;
