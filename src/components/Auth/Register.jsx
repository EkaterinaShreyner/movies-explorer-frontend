import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return(
    <div className="auth">
      <Link to="/">
        <img 
          src={logo}
          className="header__logo"
          alt="Логотип проекта" 
        />
      </Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="auth__form" name="form-register" noValidate>
        <label className="auth__input-label" htmlFor="name">Имя</label>
        <input
          className="auth__input"
          name="name"
          type="text"
          required
          minLength="2"
          maxLength="30"
          id="name"
        />
        <label className="auth__input-label" htmlFor="email">E-mail</label>
        <input
          className="auth__input"
          name="email"
          type="email"
          id="email"
          required
        />
        <label className="auth__input-label" htmlFor="password">Пароль</label>
        <input
          className="auth__input"
          name="password"
          type="password"
          id="password"
          required
        />
        {/* <span className="auth__input-error">Что-то пошло не так</span> */}
        <button
        className="auth__button"
        type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="auth__confirm">
        Уже зарегистрированы?{" "}
        <Link className="auth__link" to="/sign-in">Войти</Link>
      </p>
    </div>
  )
}

export default Register;