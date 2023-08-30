import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return(
    <>
      <div className="cards">
        <MoviesCard movieTitle="33 слова о дизайне"/>
        <MoviesCard movieTitle="Киноальманах «100 лет дизайна»"/>
        <MoviesCard movieTitle="В погоне за Бенкси"/>
        <MoviesCard movieTitle="Баския: Взрыв реальности"/>
        <MoviesCard movieTitle="Бег это свобода"/>
        <MoviesCard movieTitle="Книготорговцы"/>
        <MoviesCard movieTitle="Когда я думаю о Германии ночью"/>
        <MoviesCard movieTitle="Gimme Danger: История Игги и The Stooge..."/>
        <MoviesCard movieTitle="Дженис: Маленькая девочка грустит"/>
        <MoviesCard movieTitle="ДСоберись перед прыжком"/>
        <MoviesCard movieTitle="Пи Джей Харви: A dog called money"/>
        <MoviesCard movieTitle="По волнам: Искусство звука в кино"/>
      </div>
      <button className="cards__button">Ещё</button>
    </>
  )
}

export default MoviesCardList;