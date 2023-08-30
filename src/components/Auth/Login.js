import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return(
    <div className="auth">
      <Link to="/">
        <img 
          src={logo}
          className="header__logo"
          alt="Логотип проекта" 
        />
      </Link>
      <h2 className="auth__title">Рады видеть!</h2>
      <form className="auth__form" name="form-login">
        <label className="auth__input-label" for="email">E-mail</label>
        <input
          className="auth__input"
          name="email"
          type="email"
          id="email"
          required
        />
        <label className="auth__input-label" for="password">Пароль</label>
        <input
          className="auth__input"
          name="password"
          type="password"
          id="password"
          required
        />
        <button
        className="auth__button"
        type="submit"
        >
          Войти
        </button>
      </form>
      <p className="auth__confirm">
        Ещё не зарегистрированы?{" "}
        <Link className="auth__link" to="/sign-up">Регистрация</Link>
      </p>
    </div>
  )
}

export default Login;