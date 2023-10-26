import "./SwitchCheckbox.css";

function SwitchCheckbox({ caption, setIsCheckboxClicked, isCheckboxClicked }) {

  return (
    <div className="switch-checkbox">
      <label className="switch-checkbox__label">
        <input
          className="switch-checkbox__input"
          type="checkbox"
          checked={Boolean(isCheckboxClicked)}
          onChange={() => setIsCheckboxClicked()}
        />
        <span className="switch-checkbox__slider" />
      </label>
      <p className="switch-checkbox__caption">{caption}</p>
    </div>
  );
}

export default SwitchCheckbox;
