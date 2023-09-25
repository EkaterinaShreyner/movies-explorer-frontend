import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hook/useForm';

function Login(props) {

  const { values, handleChange, errors, isFormValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(values.email, values.password);
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
      <form className="auth__form" name="form-login" noValidate onSubmit={handleSubmit} autoComplete="on">
        <label className="auth__input-label" htmlFor="email">E-mail</label>
        <input
          className="auth__input"
          name="email"
          type="email"
          id="email"
          placeholder="E-mail"
          pattern="[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}"
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
        <span className="auth__error">{props.errorMessage}</span>
        <button
        className={`auth__button ${isFormValid ? "" : "auth__button_disabled"}`}
        type="submit"
        disabled={!isFormValid}
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