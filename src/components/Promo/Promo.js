import React from "react";
import landing_logo from '../../images/landing_logo.svg';
import NavTab from "../NavTab/NavTab";

function Promo(props) {
  return (
    <section className="promo">
      <img src={landing_logo} className="promo__landing" alt="Логотип проекта" />
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      {props.children}
    </section>
  );
}

export default Promo;