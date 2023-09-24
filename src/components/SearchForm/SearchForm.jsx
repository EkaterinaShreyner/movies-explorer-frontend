import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { ERROR_MESSAGE } from "../../utils/constants";
import { useLocation } from "react-router-dom";

function SearchForm(props) {

  const location = useLocation()
  const currentPath = location.pathname

  // ошибка при запросе в случае пустого поля
  const [inputError, setInputError] = useState("");

  function handleChange(evt) {
    props.setSearchText(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (props.searchText === "" && currentPath === "/movies") {
      setInputError(ERROR_MESSAGE.EMPTY_TEXT_INPUT)
    } else {
      setInputError("")
      props.handleSearchMovies()
    }
  }

  return(
    <div className="search">
      <form className="search__form" name="form-search" onSubmit={handleSubmit} noValidate>
        <label className="search__input-label" htmlFor="movie-title"></label>
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          value={props.searchText}
          onChange={handleChange}
          required
          minLength="1"
        />
        {/* {currentPath ==="/movies" && <span className="search__input-error">{inputError}</span>} */}
        <span className="search__input-error">{inputError}</span>
        <button
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