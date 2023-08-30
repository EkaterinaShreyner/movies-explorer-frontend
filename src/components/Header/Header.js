import React from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Header() {
  return(
    <header className="header">
      <Link to="/">
        <img 
          src={logo}
          className="header__logo"
          alt="Логотип проекта" 
        />
      </Link>
      <nav>
        <ul className="header__routs">
          <li>
            <Link className="header__rout-register" to="/sign-up">Регистрация</Link>
          </li>
          <li>
            <Link className="header__rout-login" to="/sign-in">Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;