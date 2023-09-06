import { Link, NavLink } from "react-router-dom";

function MobileMenu(props) {
  return(
    <div className={`menu-mobile ${props.isMenuMobile && `menu-mobile_opened`}`}>
      <button
        className="menu-mobile__button"
        type="button"
        onClick={props.handleMenuMobile}
      ></button>
      <nav className="menu-mobile__container">
        <ul className="menu-mobile__list">
          <li>
            <NavLink to="/" className={({isActive}) => `menu-mobile__item ${isActive ? "menu-mobile__item_active" : ""}`}>Главная</NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={({isActive}) => `menu-mobile__item ${isActive ? "menu-mobile__item_active" : ""}`}>Фильмы</NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className={({isActive}) => `menu-mobile__item ${isActive ? "menu-mobile__item_active" : ""}`}>Сохранённые фильмы</NavLink>
          </li>
          <li>
            <Link to="/profile" className="menu-mobile__profile"></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu;