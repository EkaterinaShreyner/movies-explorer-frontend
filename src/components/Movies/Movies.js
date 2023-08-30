import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return(
    <>
      {/* <Header/> */}
      <div className="movies">
        <SearchForm/>
        <MoviesCardList/>
      </div>
      <Footer/>
    </>
  )
}

export default Movies;