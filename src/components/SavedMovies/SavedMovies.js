import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return(
    <>
    {/* <Header/> */}
    <div className="saved-movies">
      <SearchForm/>
      <MoviesCardList/>
    </div>
    </>
  )
}

export default SavedMovies;