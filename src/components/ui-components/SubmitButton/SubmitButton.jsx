import "./SubmitButton.css";

function SubmitButton({ content }) {
  return (
    <button type="submit" className="submit-button">
      <p className="submit-button__content">{content}</p>
    </button>
  );
}

export default SubmitButton;
