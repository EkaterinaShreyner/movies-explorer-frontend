import React from 'react';
import { useLocation } from "react-router-dom";

function MoviesCard(props) {

  const location = useLocation();
  const currentPath = location.pathname;

  const movie = {
    country : props.movie.country,
    director: props.movie.director,
    duration: props.movie.duration,
    year: props.movie.year,
    description: props.movie.description,
    image: location.pathname === '/saved-movies' ? props.movie.image : `https://api.nomoreparties.co/${props.movie.image.url}`,
    trailerLink: props.movie.trailerLink,
    nameRU: props.movie.nameRU,
    nameEN: props.movie.nameEN,
    thumbnail: `https://api.nomoreparties.co/${props.movie.image.url}`,
    movieId: props.movie.id,
}

  function saveMovie() {
    const movieItem = props.moviesSaved.find((movieSaved) => movieSaved.movieId === movie.movieId)
    if (props.isSavedMovie) {
      props.deleteMovie(movieItem)
    } else {
      props.saveMovie(movie)
    }
  }

  function deleteMovie() {
    props.deleteMovie(props.movie)
  }


  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    duration = duration % 60;
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  return(
    <div className="card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          src={movie.image}
          alt={movie.nameRU}
        />
      </a>
      <div className="card__info">
        <div className="card__container">
          <h2 className="card__title">{movie.nameRU}</h2>
            {currentPath === "/saved-movies" ? (
              <button className="card__button-remove" type="button" onClick={deleteMovie}></button>
            ) : (
              <button className={`card__button ${props.isSavedMovie ? "card__button_active" : ""}`} onClick={saveMovie}></button>
            )}
        </div>
        <p className="card__duration">{formatDuration(movie.duration)}</p>
      </div>
    </div>
  )
}

export default MoviesCard;