import React, { useEffect, useState } from "react";
// import ButtonMore from "../ButtonMore/ButtonMore";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  const [moviesDisplayed, setMoviesDisplayed] = useState(0);
  const [moviesMore, setMoviesMore] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      console.log(`${screenWidth} +1)`)
    } else if (screenWidth >= 768) {
      setMoviesDisplayed(8)
      setMoviesMore(2)
      console.log(`${screenWidth} +2)`)
    } else if (screenWidth >= 320) {
      setMoviesDisplayed(5)
      setMoviesMore(2)
      console.log(`${screenWidth} +3)`)
    }
  }, [screenWidth])

  function ShowMoviesMore() {
    setMoviesDisplayed(moviesDisplayed + moviesMore)
  }
  
  return(
    <>
      <div className="movies__list">
        {/* {props.children} */}
        {props.movies.slice(0, moviesDisplayed).map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.id}
              // image={`https://api.nomoreparties.co/${movie.image.url}`}
              // title={movie.nameRU}
              // duration={formatDuration(movie.duration)}
              // trailerLink={movie.trailerLink}       
              // saveMovies={handleSaveMovies}
            />
          ))}
      </div>
      <button
        className={`movies__button ${moviesDisplayed < props.movies.length ? "" : "movies__button_hidden"}`} 
        onClick={ShowMoviesMore}
        >
          Ещё
        </button>
    </>
  )
}

export default MoviesCardList;