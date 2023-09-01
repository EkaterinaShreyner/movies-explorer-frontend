import React from "react";

function MoviesCardList(props) {
  return(
    <>
      <div className="cards">
        {props.children}
      </div>
      <button className="cards__button">Ещё</button>
    </>
  )
}

export default MoviesCardList;