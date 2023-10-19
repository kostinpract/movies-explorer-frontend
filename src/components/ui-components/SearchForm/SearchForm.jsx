import MagnifyingGlass from "../../../images/magnifying-glass.svg";
import "./SearchForm.css";

function SearchForm({ placeholder, defaultValue, inputValue, onSubmit, onChange }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <img
        className="search-form__icon"
        src={MagnifyingGlass}
        alt="иконка лупы"
      />
      <input
        className="search-form__input"
        placeholder={placeholder}
        defaultValue={defaultValue}
        type="text"
        onChange={onChange}
        name='search'
      />
      <button className="search-form__submit-button" type="submit">
        Найти
      </button>
    </form>
  );
}

export default SearchForm;
