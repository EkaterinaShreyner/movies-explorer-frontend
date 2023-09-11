import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {


  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    passwoed: ""
  })

  function handleChangeInput(evt) {
    const {name, value} = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    })
    console.log(formValue)
  }

  function onRegister(evt) {
    evt.preventDefault();
    console.log('submit')
    // const { name, email, password } = formValue;
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
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form className="auth__form" name="form-register"  onSubmit={onRegister}>
        <label className="auth__input-label" htmlFor="name">Имя</label>
        <input
          className="auth__input"
          name="name"
          type="text"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="30"
          id="name"
          onChange={handleChangeInput}
        />
        <label className="auth__input-label" htmlFor="email">E-mail</label>
        <input
          className="auth__input"
          name="email"
          type="email"
          id="email"
          placeholder="E-mail"
          required
          onChange={handleChangeInput}
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