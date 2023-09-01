import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return(
    <>
    <div className="saved-movies">
      <SearchForm/>
      <MoviesCardList>
          <MoviesCard moviesTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard moviesTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard moviesTitle="33 слова о дизайне"></MoviesCard>
      </MoviesCardList>
    </div>
    </>
  )
}

export default SavedMovies;