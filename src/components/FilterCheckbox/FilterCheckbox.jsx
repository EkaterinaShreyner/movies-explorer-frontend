import React, { useState } from "react";

function FilterCheckbox(props) {

  return(
    <div className="filter">
      <input
        type="checkbox"
        name="filter"
        className="filter__input"
        id="filter"
        onChange={props.onChangeCheckbox}
        checked={props.isChecked}
      />
      <label className="filter__label" htmlFor="filter">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;