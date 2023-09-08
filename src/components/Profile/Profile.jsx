import { useState } from "react";

function Profile(props) {

  // const [isEditProfile, setEditProfile] = useState(false);
  const [name, setName] = useState("Екатерина")
  const [email, setEmail] = useState("kkk@mail.ru");
  const [isSubmitButton, setIsSubmitButton] = useState(false);

  function handleChangeInputName(evt) {
    setName(evt.target.value);
  }

  function handleChangeInputEmail(evt) {
    setEmail(evt.target.value);
  }

  function onLoginOut() {
    props.onLoginOut();
  }

  function handleChangeButtonSubmit() {
    setIsSubmitButton(true)
  }

  return(
    <div className="profile">
      <h2 className="profile__title">Привет, Екатерина!</h2>
      <form className="profile__form" name="form-profile" noValidate>
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
            value={name || ""}
            onChange={handleChangeInputName}
            placeholder="Имя"
          />
        </div>
        <div className="profile__container">
        <label className="profile__input-label" htmlFor="email">E-mail</label>
        <input
          className="profile__input"
          type="text"
          name="email"
          id="email"
          required
          value={email || ""}
          onChange={handleChangeInputEmail}
          placeholder="E-mail"
        />
        </div>
        {!isSubmitButton ? (
          <>
            <button className="profile__button-edit" type="button" onClick={handleChangeButtonSubmit}>Редактировать</button>
            <button className="profile__button-exit" type="button" onClick ={onLoginOut}>Выйти из аккаунта</button>
          </>
        ) : (
          <button className="profile__button-submit" type="submit">Сохранить</button>
        )}
      </form>
    </div>
  )
}

export default Profile;