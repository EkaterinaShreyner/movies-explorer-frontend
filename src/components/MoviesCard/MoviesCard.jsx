import React, { useState } from 'react';
import { useLocation } from "react-router-dom";


function MoviesCard(props) {

  const [isButtonSave, setIsButtonSave] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const movie = {
    country : props.movie.country,
    director: props.movie.director,
    duration: formatDuration(props.movie.duration),
    year: props.movie.year,
    description: props.movie.description,
    image: `https://api.nomoreparties.co/${props.movie.image.url}`,
    trailer: props.movie?.trailerLink,
    nameRU: props.movie.nameRU,
    nameEN: props.movie.nameEN,
    thumbnail: props.movie.image,
    movieId: props.movie.id,
}

  function saveMovies() {
    setIsButtonSave(!isButtonSave);
    // props.saveMovies(movie)
  }

   function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    duration = duration % 60;
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  return(
    <div className="card">
      {/* <a href={props.trailerLink} target="_blank" rel="noreferrer"> */}
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          // src={props.image}
          // alt={props.title}
          src={movie.image}
          alt={movie.nameRU}
        />
      </a>
      <div className="card__info">
        <div className="card__container">
          {/* <h2 className="card__title">{props.title}</h2> */}
          <h2 className="card__title">{movie.nameRU}</h2>
            {currentPath === "/saved-movies" ? (
              <button className="card__button-remove" type="button" onClick={saveMovies}></button>
            ) : (
              <button className={`card__button ${isButtonSave ? "card__button_active" : ""}`} onClick={saveMovies}></button>
            )}
        </div>
        {/* <p className="card__duration">{props.duration}</p> */}
        <p className="card__duration">{movie.duration}</p>
      </div>
    </div>
  )
}

export default MoviesCard;