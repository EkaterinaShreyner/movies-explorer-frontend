import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { SCREEN_SIZE, MORE_MOVIES, DISPLAYED_MOVIES } from "../../utils/constants";

function MoviesCardList(props) {

  const [moviesDisplayed, setMoviesDisplayed] = useState(0);
  const [moviesMore, setMoviesMore] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (screenWidth >= SCREEN_SIZE.DESKTOP) {
      setMoviesDisplayed(DISPLAYED_MOVIES.DESKTOP)
      setMoviesMore(MORE_MOVIES.DESKTOP)
    } 
    else if (screenWidth >= SCREEN_SIZE.TABLET) {
      setMoviesDisplayed(DISPLAYED_MOVIES.TABLET)
      setMoviesMore(MORE_MOVIES.TABLET)
    } else if (screenWidth >= SCREEN_SIZE.MOBILE) {
      setMoviesDisplayed(DISPLAYED_MOVIES.MOBILE)
      setMoviesMore(MORE_MOVIES.MOBILE)
    }

    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [props.movies, screenWidth, setScreenWidth])


  function ShowMoviesMore() {
    setMoviesDisplayed(moviesDisplayed + moviesMore)
  }

  function checkIsSavedMovie(movies, movie) {
    return movies.some((movieSaved) => movieSaved.movieId === movie.id) ? true : false
  }
  
  return(
    <>
      <div className="movies__list">
        {currentPath === "/movies" ? 
        props.movies.slice(0, moviesDisplayed).map((movie) => (
              <MoviesCard
              movie={movie}
              key={movie.id}
              isSavedMovie={checkIsSavedMovie(props.moviesSaved, movie)}
              deleteMovie={props.deleteMovie}
              saveMovie={props.saveMovie}
              moviesSaved={props.moviesSaved}
              
              />
          )) : 
          props.moviesSaved.map((movie) => (
              <MoviesCard
              movie={movie}
              key={movie._id}
              deleteMovie={props.deleteMovie}
              />
          ))
        }
      </div>
      {currentPath === "/movies" &&
        <button
          className={`movies__button ${moviesDisplayed < props.movies.length ? "" : "movies__button_hidden"}`} 
          onClick={ShowMoviesMore}
        >
          Ещё
        </button>
      }
    </>
  )
}

export default MoviesCardList;