import React from "react";
import foto from "../../images/ava1.png";

function AboutMe() {
  return(
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__description">
          <h3 className="about-me__name">Екатерина</h3>
          <p className="about-me__occupation">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__text">Люблю развиваться и помогать людям. Раньше вела экономику компаний и помогала им не утонуть в отчетах бухгалтерии. Но сильно увлеклась вебом, который вдохновил на получение новых знаний и скилов.
Мне нравится frontend-разработка, люблю, когда интерфейс сделан с заботой о пользователях. Для меня важно реализовывать что-то ценное и быть участником этой реализации. Рисую на холсте и коллекционирую детские книги с красивыми иллюстрациями. А ещё я очень люблю путешествовать.
          </p>
          <a className="about-me__link-githab" href="https://github.com/EkaterinaShreyner" target="_blank" rel="noreferrer">Githab</a>
        </div>
        <img 
          className="about-me__foto"
          src={foto}
          alt="Фото"
        />
      </div>
    </section>
  )
}

export default AboutMe;