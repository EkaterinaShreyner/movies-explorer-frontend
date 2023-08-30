import React from "react";
import imageMovie from "../../images/pic__COLOR_pic1.png"

function MoviesCard(props) {
  return(
    <div className="card">
      <img
        className="card__image"
        src={imageMovie}
        alt="Заставка к фильму"
      />
      <div className="card__container">
        <div>
          <h2 className="card__title">{props.movieTitle}</h2>
          <p className="card__duration">1ч 47м</p>
        </div>
        <button className="card__button"></button>
      </div>
    </div>
  )
}

export default MoviesCard;