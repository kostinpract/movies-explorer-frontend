import "./SubmitButton.css";

function SubmitButton({ content, extraClass, isDisabled, click }) {
  return (
    <button
      onClick={click}
      disabled={isDisabled}
      type="submit"
      className={`submit-button ${extraClass}`}
    >
      <p className="submit-button__content">{content}</p>
    </button>
  );
}

export default SubmitButton;
