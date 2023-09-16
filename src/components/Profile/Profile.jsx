import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hook/useForm';

function Profile(props) {

  const { values, setValues, handleChange, errors, isFormValid } = useFormWithValidation();
  // глобальный стейт данных пользователя
  const currentUser = useContext(CurrentUserContext);
  // стейт кноки обновления данных пользователя
  const [isSubmitButton, setIsSubmitButton] = useState(false);
  // стейт поля ввода данных
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email 
    })
  }, [currentUser, setValues]);

  function onLoginOut() {
    props.onLoginOut();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isFormValid) {
      props.onUpdateUser({
        name: values.name,
        email: values.email,
      })
      setTimeout(() => setIsSubmitButton(false), 2000);
    }
    setIsInputDisabled(true);
  }

  function handleChangeButtonEdit() {
    setIsSubmitButton(true);
    setIsInputDisabled(false);
  }

  return(
    <div className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
      <form className="profile__form" name="form-profile" noValidate onSubmit={handleSubmit}>
        <div className="profile__container">
          <label className="profile__input-label" htmlFor="name">Имя</label>
          <input
            className="profile__input"
            type="text"
            name="name"
            id="name"
            minLength="2"
            maxLength="30"
            required
            value={values.name || ""}
            onChange={handleChange}
            placeholder="Имя"
            disabled={isInputDisabled}
          />
          <span className="profile__input-error">{errors.name}</span>
        </div>
        <div className="profile__container">
        <label className="profile__input-label" htmlFor="email">E-mail</label>
        <input
          className="profile__input"
          type="email"
          name="email"
          id="email"
          required
          value={values.email || ""}
          onChange={handleChange}
          placeholder="E-mail"
          disabled={isInputDisabled}
        />
        <span className="profile__input-error">{errors.email}</span>
        </div>
        <span className="profile__error">{props.errorMessage}</span>
        {!isSubmitButton ? (
          <>
            <button className="profile__button-edit" type="button" onClick={handleChangeButtonEdit}>Редактировать</button>
            <button className="profile__button-exit" type="button" onClick ={onLoginOut}>Выйти из аккаунта</button>
          </>
        ) : (
          <button className={`profile__button-submit ${isFormValid ? "" : "profile__button-submit_disabled"}`}
            type="submit"
          >
            Сохранить
          </button>
        )}
      </form>
    </div>
  )
}

export default Profile;