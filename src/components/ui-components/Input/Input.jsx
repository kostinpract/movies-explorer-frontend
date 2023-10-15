import "./Input.css";

function Input({ inputTitle, name, type, value, placeholder }) {
  return (
    <label className="input-component__label" key="name">
      <p className="input-component__title">{inputTitle}</p>
      <input
        className="input-component__input"
        type={type}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
      />
      {/* <span className="input-component__error">error</span> */}
    </label>
  );
}

export default Input;
