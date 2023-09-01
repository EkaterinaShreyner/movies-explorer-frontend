import React from "react";

function NavTab() {
  return(
    <section className="navtab">
      <nav>
        <ul className="navtab__list">
          <li>
            <a className="navtab__item" href="#project">
              О проекте
            </a>
          </li>
          <li>
            <a className="navtab__item" href="#techs">
              Технологиии
            </a>
          </li>
          <li>
            <a className="navtab__item" href="#about-me">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>  
  );
}

export default NavTab;