import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import { useFormWithValidation } from '../../hook/useForm';

function SearchForm(props) {

  // const { values, setValues, handleChange, errors, setErrors, isFormValid } = useFormWithValidation();
   // состояние текста в поиске
  //  const [searchText, setSearchText] = useState("");

  function handleChange(evt) {
    props.setSearchText(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (props.searchText) {
    //   setErrors({search: "Введите название фильма"})
    // } else {
    //   props.handleSearchMovies(values.search);
    // }
    props.handleSearchMovies()
    }
  }

  // useEffect(() => {
  //   // если пользователь повторно переходит на страницу "Фильмы",
  //   if (location.pathname === "./movies") {
  //     // достаем текст запроса из локального хранилища браузера
  //     setValues({ search: localStorage.getItem("search") });
  //   }
  // }, [location.pathname, setValues]);

  return(
    <div className="search">
      <form className="search__form" name="form-search" onSubmit={handleSubmit} noValidate>
        <label className="search__input-label" htmlFor="movie-title"></label>
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          // value={values.search || ""}
          value={props.searchText}
          onChange={handleChange}
          required
          minLength="1"
        />
        <span className="search__input-error"></span>
        {/* <span className={`search__input-error ${!isFormValid ? "search__input-error_active" : ""}`}>{errors.search}</span> */}
        <button
          // className={`search__button ${!isFormValid ? "search__button_disabled" : ""}`}
          className="search__button"
          type="submit"
          // disabled={!isFormValid}
        >
        </button>
      </form>
      <FilterCheckbox onChangeCheckbox={props.onChangeCheckbox} checked={props.isChecked}></FilterCheckbox>
    </div>
  )
}

export default SearchForm;