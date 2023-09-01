import React from "react";

function Portfolio() {
  return(
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li> 
          <a className="portfolio__link" href="https://github.com/EkaterinaShreyner" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Статичный сайт</div>
            <div className="portfolio__arrow"/>
          </a>
        </li>
        <li> 
          <a className="portfolio__link" href="https://github.com/EkaterinaShreyner" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Адаптивный сайт</div>
            <div className="portfolio__arrow"/>
          </a>
        </li>
        <li> 
          <a className="portfolio__link" href="https://github.com/EkaterinaShreyner" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Одностраничное приложение</div>
            <div className="portfolio__arrow"/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;