import React from "react";

function MoviesCardList(props) {
  return(
    <>
      <div className="movies__list">
        {props.children}
      </div>
      <button className="movies__button">Ещё</button>
    </>
  )
}

export default MoviesCardList;