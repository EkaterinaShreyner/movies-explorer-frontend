import React from 'react';

function Profile() {
  return(
    <div className="profile">
      <h2 className="profile__title">Привет, Екатерина!</h2>
      <form className="profile__form" name="form-profile">
      <label className="profile__input-label" for="name">Имя</label>
        <input
          className="profile__input"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          required
        />
        <label className="profile__input-label" for="email">E-mail</label>
        <input
          className="profile__input"
          type="text"
          name="email"
          required
        />
        <button className="profile__button-submit" type="submit">Редактировать</button>
        <button className="profile__button-exit">Выйти из аккаунта</button>
      </form>
    </div>
  )
}

export default Profile;