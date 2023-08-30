import React from "react";
import foto from "../../images/pic__COLOR_pic.png";

function AboutMe() {
  return(
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__description">
          <h3 className="about-me__name">Екатерина</h3>
          <p className="about-me__occupation">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании 
              «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
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