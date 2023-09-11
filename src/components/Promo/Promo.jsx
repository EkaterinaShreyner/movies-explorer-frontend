import React from "react";
import landing_logo from '../../images/landing_logo.svg';

function Promo() {
  return (
    <section className="promo">
      <img src={landing_logo} className="promo__image" alt="Логотип проекта" />
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  );
}

export default Promo;