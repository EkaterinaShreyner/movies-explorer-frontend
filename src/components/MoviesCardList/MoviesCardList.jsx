import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {

  const [moviesDisplayed, setMoviesDisplayed] = useState(0);
  const [moviesMore, setMoviesMore] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (screenWidth >= 1280) {
      setMoviesDisplayed(12)
      setMoviesMore(3)
    // } else if (screenWidth >= 768) {
    } else if (screenWidth >= 830) {
      setMoviesDisplayed(8)
      setMoviesMore(2)
    // } else if (screenWidth >= 320) {
    } else if (screenWidth >= 405) {
      setMoviesDisplayed(5)
      setMoviesMore(2)
    }
  }, [screenWidth])

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