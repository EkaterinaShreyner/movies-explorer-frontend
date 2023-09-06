import React from "react";
import { useState } from "react";
import logo from '../../images/logo.svg';
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import close from "../../images/Group.svg";

function Header(props) {

  const location = useLocation();
  const currentPath = location.pathname;

  const [isMenuMobile, setIsMenuMobile] = useState(false);

  function handleMenuMobile() {
    setIsMenuMobile(!isMenuMobile)
  }

  return(
    <>
      <MobileMenu
        isMenuMobile={isMenuMobile}
        handleMenuMobile={handleMenuMobile}
      ></MobileMenu>
    <header className={`header ${currentPath === "/" ? "header_landing" : ""}`}>
      <Link to="/">
        <img 
          src={logo}
          className="header__logo"
          alt="Логотип проекта" 
        />
      </Link>
      {props.isLoggedIn ? (
        <>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li>
                <NavLink to="/movies" className={({isActive}) => `header__nav-item ${isActive ? "header__nav-item_active" : ""}`}>Фильмы</NavLink>
              </li>
              <li>
                <NavLink to="/saved-movies" className={({isActive}) => `header__nav-item ${isActive ? "header__nav-item_active" : ""}`}>Сохранённые фильмы</NavLink>
              </li>
            </ul>
            <NavLink to="/profile" className={`header__nav-profile ${currentPath === "/" ? "" : "header__nav-profile_landing"}`}/>   
          </nav>
          <div className="header__menu-burger"
            onClick={handleMenuMobile}
          >
            { isMenuMobile
                ?
                  ""
                : 
                <>
                  <div className="header__menu-burger-item"></div>
                  <div className="header__menu-burger-item"></div>
                  <div className="header__menu-burger-item"></div>
                </>
            }
          </div>
        </>
      ) : (
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
      )}
    </header>
    </>
    
  )
}

export default Header;