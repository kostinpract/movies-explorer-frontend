import "./SubmitButton.css";

function SubmitButton({ content, extraClass }) {
  return (
    <button type="submit" className={`submit-button ${extraClass}`}>
      <p className="submit-button__content">{content}</p>
    </button>
  );
}

export default SubmitButton;
