import SearchForm from "../SearchForm/SearchForm";
import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox";
import "./SearchFormSection.css";

function SearchFormSection({ placeholder, inputValue }) {
  return (
    <section className="search-form-section">
      <SearchForm className="search-form-section__form" placeholder="Фильм" />
      <SwitchCheckbox
        className="search-form-section__switch-checkbox"
        caption="Короткометражки"
      />
    </section>
  );
}

export default SearchFormSection;
