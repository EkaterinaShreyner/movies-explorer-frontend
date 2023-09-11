import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import imageMovie from "../../images/pic__COLOR_pic1.png"


function MoviesCard(props) {

  const [isButtonSave, setIsButtonSave] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  function addMovie() {
    setIsButtonSave(true)
  }

  return(
    <div className="card">
      <img
        className="card__image"
        src={imageMovie}
        alt="Заставка к фильму"
      />
      <div className="card__info">
        <div className="card__container">
          <h2 className="card__title">{props.movieTitle}</h2>
            {currentPath === "/saved-movies" ? (
              <button className="card__button-remove" type="button"></button>
            ) : (
              <button className={`card__button ${isButtonSave ? "card__button_active" : ""}`} onClick={addMovie}></button>
            )}
        </div>
        <p className="card__duration">1ч 47м</p>
      </div>
    </div>
  )
}

export default MoviesCard;