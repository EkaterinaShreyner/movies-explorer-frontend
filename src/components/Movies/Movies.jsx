import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return(
    <>
      <div className="movies">
        <SearchForm/>
        <MoviesCardList>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="Киноальманах «100 лет дизайна»"></MoviesCard>
          <MoviesCard movieTitle="В погоне за Бенкси"></MoviesCard>
          <MoviesCard movieTitle="Баския: Взрыв реальности"></MoviesCard>
          <MoviesCard movieTitle="Бег это свобода"></MoviesCard>
          <MoviesCard movieTitle="Книготорговцы"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
        </MoviesCardList>
          
        
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Movies;