import React from "react";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

  // состояние чекбокса
  const [isChecked, setIsChecked] = useState(false);

  return(
    <div className="search">
      <form className="search__form" name="form-search" onSubmit={props.handleSearchMovies}>
        <label className="search__input-label" htmlFor="movie-title"></label>
        <input
          className="search__input"
          name="title"
          type="text"
          id="movie-title"
          placeholder="Фильм"
          value={props.searchText}
          onChange={props.searchChange}
        />
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox onChangeShotMovies={props.onChangeShotMovies} checked={isChecked}></FilterCheckbox>
    </div>
  )
}

export default SearchForm;