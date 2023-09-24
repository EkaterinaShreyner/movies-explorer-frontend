import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {

  const [moviesDisplayed, setMoviesDisplayed] = useState(0);
  const [moviesMore, setMoviesMore] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();
  const currentPath = location.pathname;

//   useEffect(() => {
//     window.addEventListener('resize', ShowMoviesMore);

//     // Cleanup by removing event listener on component unmount
//     return () => {
//         window.removeEventListener('resize', ShowMoviesMore);
//     };
// }, [ShowMoviesMore]);

  useEffect(() => {
    if (screenWidth >= 1280) {
      setMoviesDisplayed(12)
      setMoviesMore(3)
    } else if (screenWidth >= 768) {
      setMoviesDisplayed(8)
      setMoviesMore(2)
    } else if (screenWidth >= 320) {
      setMoviesDisplayed(5)
      setMoviesMore(2)
    }
  }, [screenWidth])

  function ShowMoviesMore() {
    setMoviesDisplayed(moviesDisplayed + moviesMore)
  }

  useEffect(() => {
    setMoviesMore(0);
  }, [props.movies]);

  function checkMovieStatus(movies, movie) {
    // if (moviesSaved.some((movieSaved) => movieSaved === movie.id)) {
    //   return true
    // } else {
    //   return false
    // }
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
              isSavedMovie={checkMovieStatus(props.moviesSaved, movie)}
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
              moviesSaved={props.moviesSaved}
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