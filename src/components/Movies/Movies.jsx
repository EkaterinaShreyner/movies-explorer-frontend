import React, { useEffect } from "react";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import * as moviesApi from '../../utils/MoviesApi';
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";
import { ERROR_MESSAGE } from "../../utils/constants";

function Movies(props) {


  // массив всех фильмов
  const [movies, setMovies] = useState([]);
  // отображаемые фильмы
  const [moviesList, setMoviesList] = useState([]);

  // стейт прелодера
  const [isLoading, setIsLoading] = useState(false);
   // состояние чекбокса
   const [isChecked, setIsChecked] = useState(false);
  // const { values, handleChange, errors, setErrors, isFormValid } = useFormWithValidation();
  // состояние текста в поиске
   const [searchText, setSearchText] = useState("");
  // ошибка при сабмите
  const [error, setError] = useState("")

  const location = useLocation()
  const currentPath = location.pathname;
  
  // поиск фильмов по названию на странице фильмов, включая первый запрос
  function handleSearchMovies() {
  setIsLoading(true)
  if (searchText === "") {
    return setError("Введите название фильма")
  }
  if (!localStorage.getItem("movies")) {
    moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
        localStorage.setItem("searchInput", searchText)
        // localStorage.setItem("isCheckbox", isChecked)
        const moviesFromLocal = JSON.parse(localStorage.getItem("movies"));
        const filterMoviesName = moviesFromLocal.filter((movie) => (movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())))
        localStorage.setItem("filterMoviesName", JSON.stringify(filterMoviesName))
        setMoviesList(filterMoviesName)
        if (filterMoviesName.length < 1) {
          return setError(ERROR_MESSAGE.NOT_FOUND_MOVIES)
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  } else {
    localStorage.setItem("searchInput", searchText)
    const moviesFromLocal = JSON.parse(localStorage.getItem("movies"));
    const filterMoviesName = moviesFromLocal.filter((movie) => (movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())))
    localStorage.setItem("filterMoviesName", JSON.stringify(filterMoviesName))
    setMoviesList(filterMoviesName)
    setIsLoading(false)
  }
}

  // поиск короткометражек на странице фильмов
  function searchShortMovies() {
     setIsChecked(!isChecked)
     console.log(isChecked)
     localStorage.setItem("isCheckbox", JSON.stringify(isChecked));
     const moviesFromLocal = localStorage.getItem("movies");
     if (!moviesFromLocal) {
      return
     }
    // localStorage.getItem("isCheckbox")
    if (isChecked === false) {
      setIsChecked(true)
      localStorage.setItem("isCheckbox", isChecked)
      const filterMoviesName = JSON.parse(localStorage.getItem("filterMoviesName"));
      const filterShortMovies = filterMoviesName.filter((movie) => (movie.duration <= 40))
      localStorage.setItem("filterShortMovies", JSON.stringify(filterShortMovies))
      
      if (filterShortMovies.length === 0) {
        console.log("Нет короткометражек")
        setMoviesList([])
      } else {
        setMoviesList(filterShortMovies)
      } 
    } else {
      setIsChecked(false)
      const filterMoviesName = JSON.parse(localStorage.getItem("filterMoviesName"))
      setMoviesList(filterMoviesName)
    }
  }

  // при повторном посещении страницы, отображается прежний результат
  useEffect(() => {
    if (currentPath === "/movies") {
      setMoviesList(JSON.parse(localStorage.getItem("filterMoviesName")) ?? [])
      // setMoviesList(JSON.parse(localStorage.getItem("filterShortMovies")) ?? [])
      setSearchText(localStorage.getItem("searchInput"))
      
      setIsChecked(JSON.parse(localStorage.getItem("isCheckbox")))
    }
  }, [currentPath])

  // function saveMovie(movie) {
  //   const savedMovie = props.moviesSaved.find((movieS) => movieS.movieId === movie.id);
  //   if (savedMovie) {
  //     props.deleteMovie(savedMovie._id);
  //     return;
  //   }
  //   props.saveMovie(movie);
  // }

  return(
    <>
      <div className="movies">
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          onChangeCheckbox={searchShortMovies}
          checked={isChecked}
          setSearchText={setSearchText}
          searchText={searchText}
          error={error}
          />
        {isLoading && !error && <Preloader />}
        <MoviesCardList movies={moviesList} saveMovie={props.saveMovie} deleteMovie={props.deleteMovie} moviesSaved={props.moviesSaved}>
        </MoviesCardList>
        {error && <span className="movies__error">{error}</span>}
      </div>
    </>
  )
}

export default Movies;