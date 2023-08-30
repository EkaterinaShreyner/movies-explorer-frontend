import React from "react";
import arrow from "../../images/arrow.svg"

function Portfolio() {
  return(
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li> 
          <a className="portfolio__link" href="https://github.com/EkaterinaShreyner" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Статичный сайт</div>
            <img 
            className="portfolio__arrow"
            src={arrow}
            alt="стрелка ведущая на сайт"
            />
          </a>
        </li>
        <li> 
          <a className="portfolio__link" href="https://github.com/EkaterinaShreyner" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Адаптивный сайт</div>
            <img 
            className="portfolio__arrow"
            src={arrow}
            alt="стрелка ведущая на сайт"
            />
          </a>
        </li>
        <li> 
          <a className="portfolio__link" href="https://github.com/EkaterinaShreyner" target="_blank" rel="noreferrer">
            <div className="portfolio__link-website">Одностраничное приложение</div>
            <img 
            className="portfolio__arrow"
            src={arrow}
            alt="стрелка ведущая на сайт"
            />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;