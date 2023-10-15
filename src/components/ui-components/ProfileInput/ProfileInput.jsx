import "./ProfileInput.css";

function ProfileInput ({ 
  inputTitle,
  name, 
  type, 
  value, 
  placeholder 
}) {
  return (
    <label className="profile-input-component__label" key="name">
      <p className="profile-input-component__title">{inputTitle}</p>
      <input
        className="profile-input-component__input"
        type={type}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
      />
      {/* <span className="profile-input-component__error">error</span> */}
    </label>
  );
}

export default ProfileInput;
