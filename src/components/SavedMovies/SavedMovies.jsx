import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { ERROR_MESSAGE } from "../../utils/constants";
import mainApi from "../../utils/MainApi";

function SavedMovies(props) {

  // найденные фильмы среди сохраненных
  const [movieSavedFilter, setMoviesSavedFilter] = useState([]);
  // состояние чекбокса
  const [isChecked, setIsChecked] = useState(false);
  //  // состояние текста в поиске
  const [searchText, setSearchText] = useState("");
  // ошибка при поиске, если фильмы по запросу не найдены
  const [error, setError] = useState("")

  const moviesSearched = props.moviesSaved.filter((movie) => (movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())))

  // поиск фильмов по названию на странице сохраненных фильмов
  function handleSearchFilteredMovies() {
    if (moviesSearched.length < 1) {
      
      setError(ERROR_MESSAGE.NOT_FOUND_MOVIES)
      // return movieSavedFilter;
      setMoviesSavedFilter([])
    } else {
      setMoviesSavedFilter(moviesSearched)
      setError("")
    }
  }

  function showMovies() {
    if (movieSavedFilter.length > 0) {
      console.log('1');
      return movieSavedFilter;
    } else if (movieSavedFilter.length === 0) {
      console.log('2');
      return movieSavedFilter;
    } else {
      console.log(movieSavedFilter);
      console.log('3');
      return props.moviesSaved;
    }
  }

  // поиск короткометражек на странице сохраненных фильмов
  function searchShortMovies() {
    setIsChecked(!isChecked)
    console.log(`чекбокс: ${isChecked}`)
    
    if (isChecked === false) {
      const moviesSavedShort = props.moviesSaved.filter((movie) => (movie.duration <= 40))
      if (moviesSavedShort.length > 0) {
        setMoviesSavedFilter(moviesSavedShort)
      } else {
        setMoviesSavedFilter([])
      }
    } else {
      console.log(`чекбокс: ${isChecked}`)
    }
    const moviesSavedShort = props.moviesSaved.filter((movie) => (movie.duration <= 40))
    if (moviesSavedShort.length > 0) {
      setMoviesSavedFilter(moviesSavedShort)
    } else {
      return setMoviesSavedFilter(props.moviesSaved)
    }
  }

 

  return(
    <div className="movies">
      <SearchForm
        handleSearchMovies={handleSearchFilteredMovies}
        onChangeCheckbox={searchShortMovies}
        checked={isChecked}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      <MoviesCardList moviesSaved={showMovies()}  deleteMovie={props.deleteMovie}>
      </MoviesCardList>
      {error && <span className="movies__error">{error}</span>}
    </div>
  )
}

export default SavedMovies;