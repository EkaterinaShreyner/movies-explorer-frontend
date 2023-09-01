import React from "react";

function SearchForm() {
  return(
    <div className="search">
      <form className="search__form" name="form-search">
        <label className="search__input-label" for="movie-title">Фильм</label>
        <input
          className="search__input"
          name="title"
          type="text"
          id="movie-title"
        />
        <button className="search__button" type="submit"></button>
      </form>
      <div className="search__filter">
        <input
          className="search__checkbox"
          type="checkbox"
          role="switch"
        />
        <p className="search__short-film">Короткометражки</p>
      </div>
    </div>
  )
}

export default SearchForm;