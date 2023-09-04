import React from "react";

function FilterCheckbox() {
  return(
    <div className="filter">
      <input type="checkbox" className="filter__input" id="filter"/>
      <label className="filter__label" htmlFor="filter">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;