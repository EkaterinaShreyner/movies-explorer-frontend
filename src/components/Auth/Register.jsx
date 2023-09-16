import React from 'react';
// import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hook/useForm';

function Register(props) {

  const { values, handleChange, errors, isFormValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(values.name, values.email, values.password);
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
      <form className="auth__form" name="form-register"  onSubmit={handleSubmit}>
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
          onChange={handleChange}
          value={values.name || ""}
          pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
        />
        <span className="auth__input-error">{errors.name}</span>
        <label className="auth__input-label" htmlFor="email">E-mail</label>
        <input
          className="auth__input"
          name="email"
          type="email"
          id="email"
          placeholder="E-mail"
          required
          onChange={handleChange}
          value={values.email || ""}
        />
        <span className="auth__input-error">{errors.email}</span>
        <label className="auth__input-label" htmlFor="password">Пароль</label>
        <input
          className="auth__input"
          name="password"
          type="password"
          id="password"
          placeholder="Пароль"
          required
          onChange={handleChange}
          value={values.password || ""}
        />
        <span className="auth__input-error">{errors.password}</span>
        <div style={{display: "flex", flexDirection: "column"}}>
          <span className="auth__error">{props.errorMessage}</span>
          <button
          className={`auth__button ${isFormValid ? "" : "auth__button_disabled"}`}
          type="submit"
          disabled={!isFormValid}
          >
            Зарегистрироваться
          </button>
        </div>
       
      </form>
      <p className="auth__confirm">
        Уже зарегистрированы?{" "}
        <Link className="auth__link" to="/sign-in">Войти</Link>
      </p>
    </div>
  )
}

export default Register;