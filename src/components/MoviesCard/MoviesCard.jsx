import React, { useState } from 'react';
import { useLocation } from "react-router-dom";


function MoviesCard(props) {

  const [isButtonSave, setIsButtonSave] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  function addMovie() {
    setIsButtonSave(true);
  }

  return(
    <div className="card">
      <a href={props.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          src={props.image}
          alt={props.title}
        />
      </a>
      <div className="card__info">
        <div className="card__container">
          <h2 className="card__title">{props.title}</h2>
            {currentPath === "/saved-movies" ? (
              <button className="card__button-remove" type="button"></button>
            ) : (
              <button className={`card__button ${isButtonSave ? "card__button_active" : ""}`} onClick={addMovie}></button>
            )}
        </div>
        <p className="card__duration">{props.duration}</p>
      </div>
    </div>
  )
}

export default MoviesCard;