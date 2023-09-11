import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {

  const [formValue, setFormValue] = useState({
    email: "kkk@mail.ru",
    password: ""
  });

  function handleChangeInput(evt) {
    const {name, value} = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  return(
    <div className="auth">
      <Link to="/">
        <img 
          src={logo}
          className="auth__logo"
          alt="Логотип проекта"
        />
      </Link>
      <h1 className="auth__title">Рады видеть!</h1>
      <form className="auth__form" name="form-login" noValidate>
        <label className="auth__input-label" htmlFor="email">E-mail</label>
        <input
          className="auth__input"
          name="email"
          type="email"
          id="email"
          placeholder="E-mail"
          required
          onChange={handleChangeInput}
          value={formValue.email || ""}
        />
        <label className="auth__input-label" htmlFor="password">Пароль</label>
        <input
          className="auth__input"
          name="password"
          type="password"
          id="password"
          placeholder="Пароль"
          required
          onChange={handleChangeInput}
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