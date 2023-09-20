import React, { useEffect } from "react";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import * as moviesApi from '../../utils/MoviesApi';
// import { useFormWithValidation } from "../../hook/useForm";
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";

function Movies(props) {


  // массив всех фильмов
  const [movies, setMovies] = useState([]);
  // отображаемые фильмы
  const [moviesList, setMoviesList] = useState([]);
   // короткометражки
   const [moviesListShort, setMoviesListShort] = useState([]);
  // стейт прелодера
  const [isLoading, setIsLoading] = useState(false);
   // состояние чекбокса
   const [isChecked, setIsChecked] = useState(false);
  // const { values, handleChange, errors, setErrors, isFormValid } = useFormWithValidation();
  //  // состояние текста в поиске
   const [searchText, setSearchText] = useState("");

  const location = useLocation()
  const currentPath = location.pathname;
  

  function handleSearchMovies() {
  setIsLoading(true)
  if (!movies.length) {
    moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
        localStorage.setItem("searchInput", searchText)
        localStorage.setItem("isCheckbox", isChecked)
        const moviesFromLocal = JSON.parse(localStorage.getItem("movies"));
        const filterMoviesName = moviesFromLocal.filter((movie) => (movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())))
        localStorage.setItem("filterMoviesName", JSON.stringify(filterMoviesName))
        setMoviesList(filterMoviesName)

        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
  } else {
    const moviesFromLocal = JSON.parse(localStorage.getItem("movies"));
    const filterMoviesName = moviesFromLocal.filter((movie) => (movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())))
    localStorage.setItem("filterMoviesName", JSON.stringify(filterMoviesName))
    setMoviesList(filterMoviesName)
  }
}  

  //   moviesApi.getMovies()
  //     .then((movies) => {
  //       localStorage.setItem("movies", JSON.stringify(movies));
  //       localStorage.setItem("searchInput", searchText)
  //       // localStorage.setItem("isCheckbox", isChecked)
  //       // const filterMoviesName = movies.filter((movie) => (movie.nameRU.toLowerCase().includes(search.toLowerCase()) || movie.nameEN.toLowerCase().includes(search.toLowerCase())))
  //       const moviesFromLocal = JSON.parse(localStorage.getItem("movies"));
        
  //       const filterMoviesName = moviesFromLocal.filter((movie) => (movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())))
  //         // JSON.parse(localStorage.getItem("filterMoviesName"));
  //         localStorage.setItem("filterMoviesName", JSON.stringify(filterMoviesName))
  //         // setMovies(filterMoviesName)
  //         setMoviesList(filterMoviesName)
          
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }
  
  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    duration = duration % 60;
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  // поиск короткометражек
  function searchShortMovies() {
    localStorage.getItem("isCheckbox")
    if (isChecked === false) {
      setIsChecked(true)
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

  //   setIsChecked(!isChecked);
  //   localStorage.setItem("isCheckbox", isChecked)
  //   const filterMoviesName = JSON.parse(localStorage.getItem("filterMoviesName"));
  //   const filterShortMovies = filterMoviesName.filter((movie) => (movie.duration <= 40))
  //   localStorage.setItem("filterShortMovies", JSON.stringify(filterShortMovies))
  //   if (!isChecked) {
  //     setMoviesList(filterShortMovies)
  //   } else {
  //       if (filterShortMovies.length === 0) {
  //         console.log("Ничего не найдено")
  //       } else {
  //         setMoviesList(filterMoviesName)
  //       }
  //   }
  // }


  // при повторном посещении страницы, отображается прежний результат
  // useEffect(() => {
  //   if (localStorage.getItem("filterMoviesName") && currentPath === "/movies") {
  //     setMoviesList(JSON.parse(localStorage.getItem("filterMoviesName")))
  //     setMoviesList(JSON.parse(localStorage.getItem("filterShortMovies")))
  //     setSearchText(localStorage.getItem("searchInput"))
  //     // setIsChecked(localStorage.getItem("isCheckbox"))
  //   }
  // }, [currentPath])

  

  return(
    <>
      <div className="movies">
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          onChangeCheckbox={searchShortMovies}
          checked={isChecked}
          setSearchText={setSearchText}
          searchText={searchText}
          />
        {isLoading && <Preloader />}
        <MoviesCardList movies={moviesList}>
          {/* {moviesList.map((movie) => (
            <MoviesCard
              key={movie.id}
              image={`https://api.nomoreparties.co/${movie.image.url}`}
              title={movie.nameRU}
              duration={formatDuration(movie.duration)}
              trailerLink={movie.trailerLink}       
              movie={movie}
              saveMovies={props.saveMovies}
            />
          ))} */}
        </MoviesCardList>
      </div>
    </>
  )
}

export default Movies;