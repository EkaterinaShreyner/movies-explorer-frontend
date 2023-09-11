import React from "react";

function Portfolio() {
  return(
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__item"> 
          <a className="portfolio__link" href="https://ekaterinashreyner.github.io/how-to-learn/" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Статичный сайт</div>
            <div className="portfolio__arrow"/>
          </a>
        </li>
        <li className="portfolio__item"> 
          <a className="portfolio__link" href="https://ekaterinashreyner.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Адаптивный сайт</div>
            <div className="portfolio__arrow"/>
          </a>
        </li>
        <li className="portfolio__item"> 
          <a className="portfolio__link" href="https://mesto.project.nomoreparties.co/" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Одностраничное приложение</div>
            <div className="portfolio__arrow"/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;