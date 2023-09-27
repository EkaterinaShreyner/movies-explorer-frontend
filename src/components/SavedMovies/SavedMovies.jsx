import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { ERROR_MESSAGE } from "../../utils/constants";

function SavedMovies(props) {

  // найденные фильмы среди сохраненных
  const [movieSavedFilter, setMoviesSavedFilter] = useState([]);
  // состояние чекбокса
  const [isChecked, setIsChecked] = useState(false);
  //  // состояние текста в поиске
  const [searchText, setSearchText] = useState("");
  // ошибка при поиске, если фильмы по запросу не найдены
  const [error, setError] = useState("")


  // поиск фильмов по названию на странице сохраненных фильмов
  function handleSearchFilteredMovies() {
    const moviesSearched = props.moviesSaved.filter((movie) => (movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())))
    if (moviesSearched.length === 0) {
      setError(ERROR_MESSAGE.NOT_FOUND_MOVIES)
      setMoviesSavedFilter([])
    } else {
      setMoviesSavedFilter(moviesSearched)
      setError("")
    }
  }

  function showMovies() {
    if (movieSavedFilter.length > 0) {
      return movieSavedFilter
    } else if (movieSavedFilter.length < 1) {
      return movieSavedFilter
    } else {
      console.log(movieSavedFilter)
      return props.moviesSaved
    }
  }

  // поиск короткометражек на странице сохраненных фильмов
  function searchShortMovies() {
    setIsChecked(!isChecked)

    if (!isChecked) {
      const moviesSavedShort = movieSavedFilter.filter((movie) => (movie.duration <= 40))
      if (moviesSavedShort.length > 0) {
        setMoviesSavedFilter(moviesSavedShort)
      } else {
        setError(ERROR_MESSAGE.NOT_FOUND_MOVIES)
        setMoviesSavedFilter([])
      }
    } else {
      setMoviesSavedFilter(props.moviesSaved)
      setError("")
    }
  }

  useEffect(() => {
    if (searchText !== "") {
      return handleSearchFilteredMovies()
    }
    return setMoviesSavedFilter(props.moviesSaved);
  }, [props.moviesSaved]);

  return(
    <div className="movies">
      <SearchForm
        handleSearchMovies={handleSearchFilteredMovies}
        onChangeCheckbox={searchShortMovies}
        isChecked={isChecked}
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