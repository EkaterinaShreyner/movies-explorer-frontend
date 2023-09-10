import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return(
    <div className="movies">
      <SearchForm/>
      <MoviesCardList>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
      </MoviesCardList>
    </div>
  )
}

export default SavedMovies;