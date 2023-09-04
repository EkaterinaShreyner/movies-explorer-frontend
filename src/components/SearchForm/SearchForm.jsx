import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return(
    <div className="search">
      <form className="search__form" name="form-search">
        <label className="search__input-label" htmlFor="movie-title">Фильм</label>
        <input
          className="search__input"
          name="title"
          type="text"
          id="movie-title"
        />
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox></FilterCheckbox>
    </div>
  )
}

export default SearchForm;