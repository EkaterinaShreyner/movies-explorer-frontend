import React from "react";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {

  // состояние текста в поиске
  const [searchText, setSearchText] = useState("");

  function searchChange(evt) {
    setSearchText(evt.target.value)
  }

  function handleSearchMovies(evt) {
    evt.preventDefault();
  }

  function xxx() {
    console.log(props.movies[1])
  }

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    duration = duration % 60;
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }
  return(
    <>
      <div className="movies">
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          searchText={searchText}
          searchChange={searchChange}
          />
        <button onClick={xxx}>hhhh</button>
        <MoviesCardList>
          {/* <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard>
          <MoviesCard movieTitle="Киноальманах «100 лет дизайна»"></MoviesCard>
          <MoviesCard movieTitle="В погоне за Бенкси"></MoviesCard>
          <MoviesCard movieTitle="Баския: Взрыв реальности"></MoviesCard>
          <MoviesCard movieTitle="Бег это свобода"></MoviesCard>
          <MoviesCard movieTitle="Книготорговцы"></MoviesCard>
          <MoviesCard movieTitle="33 слова о дизайне"></MoviesCard> */}
          {props.movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              image={`https://api.nomoreparties.co/${movie.image.url}`}
              title={movie.nameRU}
              duration={formatDuration(movie.duration)}
              trailerLink={movie.trailerLink}
              
              movie={props.movie}
            // onCardClick={props.onCardClick}
            // onCardDelete={props.onCardDelete}
            // onCardLike={props.onCardLike}
            />
          ))}
        </MoviesCardList>
      </div>
    </>
  )
}

export default Movies;