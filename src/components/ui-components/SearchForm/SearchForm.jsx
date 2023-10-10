import MagnifyingGlass from "../../../images/magnifying-glass.svg";
import "./SearchForm.css";

function SearchForm({ placeholder, inputValue }) {
  return (
    <form className="search-form" action="submit">
      <img className='search-form__icon' src={MagnifyingGlass} alt="иконка лупы" />
      <input
        className="search-form__input"
        placeholder={placeholder}
        value={inputValue}
        type="text"
      />
      <button className="search-form__submit-button" type="submit">
        Найти
      </button>
    </form>
  );
}

export default SearchForm;
