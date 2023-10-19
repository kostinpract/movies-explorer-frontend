import SearchForm from "../SearchForm/SearchForm";
import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox";
import "./SearchFormSection.css";

function SearchFormSection({
  placeholder,
  inputValue,
  onSubmit,
  onChange,
  defaultValue,
  isCheckboxClicked,
  setIsCheckboxClicked,
}) {
  return (
    <section className="search-form-section">
      <SearchForm
        className="search-form-section__form"
        placeholder="Введите запрос"
        defaultValue={defaultValue}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <SwitchCheckbox
        className="search-form-section__switch-checkbox"
        caption="Короткометражки"
        isCheckboxClicked={isCheckboxClicked}
        setIsCheckboxClicked={setIsCheckboxClicked}
      />
    </section>
  );
}

export default SearchFormSection;
