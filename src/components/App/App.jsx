import React, { useEffect } from 'react';
import { useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';


import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as moviesApi from '../../utils/MoviesApi';
import mainApi from "../../utils/MainApi";
import * as authApi from "../../utils/AuthApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  STATUS_CODE_400,
  STATUS_CODE_401,
  STATUS_CODE_409,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE
} from '../../utils/constants';



function App() {
  // залогигенный пользователь
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // глобальный стейт данных пользователя
  const [currentUser, setCurrentUser] = useState({});
  // массив фильмов
  // const [movies, setMovies] = useState([]);
  // сохраненные фильмы
  const [moviesSaved, setMoviesSaved] = useState([]);

  // сообщение об ошибке от сервера
  const [isErrorMessage, setIsErrorMessage] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     moviesApi.getMovies()
  //       .then((movies) => {
  //         localStorage.setItem("movies", JSON.stringify(movies));
  //         // setMovies(movies)
  //       })
  //       .catch((err) => {
  //         console.error(`Ошибка ${err}`);
  //       });
  //   }
  // }, [isLoggedIn]);

  function onRegister(name, email, password) {
    authApi.register(name, email, password)
      .then(() => {
        onLogin(email, password);
      })
      .catch((err) => {
        if (err === STATUS_CODE_409) {
          setIsErrorMessage(ERROR_MESSAGE.CONFLICT_USER_DATA)
        }
        if (err === STATUS_CODE_400) {
          setIsErrorMessage(ERROR_MESSAGE.USER_CREDENTIALS)
        }
      })
      .finally(() => {
        setTimeout(() => setIsErrorMessage(""), 2000)
      })
  }

  function onLogin(email, password) {
    authApi.login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setIsLoggedIn(true)
        setCurrentUser(res)
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err)
        if (err === STATUS_CODE_400) {
          setIsErrorMessage(ERROR_MESSAGE.USER_AUTH)
        }
        if (err === STATUS_CODE_401) {
          setIsErrorMessage(ERROR_MESSAGE.USER_CREDENTIALS)
        }
      })
      .finally(() => {
        setTimeout(() => setIsErrorMessage(""), 2000)
      })
  }

  // запрос на проверку валидности токена
  function handleCheckToken() {
    const token = localStorage.getItem("token");
    if (token) {
      // если токен есть, отправляем запрос на проверку токена
      authApi.checkToken(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res) // получаем данные пользователя в переменной состояния
          setIsLoggedIn(true);
          navigate("/", {replace: true}) // пользователь переходит на главную страницу
          console.log(res)
        }
        return;
      })
      .catch(() => {
        // console.error(`Ошибка валидности токена: ${err}`)
        setIsLoggedIn(false)
      })
    }
  }

  // срабатывает функция проверка токена единыжды при отрисовки компонента App
  useEffect(() => {
    handleCheckToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isLoggedIn) {
      mainApi.getCurrentUser(token)
        .then((dataUser) => {
          setCurrentUser(dataUser)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [isLoggedIn])

  function handleUpdateUser(dataUser) {
    const token = localStorage.getItem("token");
    mainApi.patchUserInfo(dataUser, token) 
      .then((dataUser) => {
        setCurrentUser({
          name: dataUser.name,
          email: dataUser.email,
        })
        setIsErrorMessage(SUCCESS_MESSAGE);
      })
      .catch((err) => {
        if (err === STATUS_CODE_409) {
          setIsErrorMessage(ERROR_MESSAGE.CONFLICT_USER_DATA)
        }
        if (err === STATUS_CODE_400) {
          setIsErrorMessage(ERROR_MESSAGE.BAD_REQUEST_PROFILE)
        }
      })
      .finally(() => {
        setTimeout(() => setIsErrorMessage(""), 2000)
      })
  }

  function onLoginOut() {
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  }

  function handleSaveMovies(movie) {
    const token = localStorage.getItem("token");
    mainApi.saveMovie(movie, token)
      .then(() => {
        // setMoviesSaved()
        console.log("фильм добавлен")
      })
      .catch((err) => {
        if (err === STATUS_CODE_400) {
          console.log("Переданы некорректные данные карточки")
        }
        if (err === STATUS_CODE_401) {
          console.log("Необходима авторизация")
        }
      })
  }

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    isLoggedIn={isLoggedIn}
                  />
                  <Main />
                  <Footer />
                </>
              }
            ></Route>
            <Route path="/sign-up" element={<Register onRegister={onRegister} errorMessage={isErrorMessage} setIsErrorMessage={setIsErrorMessage}/>} />
            <Route path="/sign-in" element={<Login onLogin={onLogin} errorMessage={isErrorMessage} setIsErrorMessage={setIsErrorMessage}/>} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <Header isLoggedIn={isLoggedIn} />
                    <Profile onLoginOut={onLoginOut} onUpdateUser={handleUpdateUser} errorMessage={isErrorMessage}/>
                  </>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <Header isLoggedIn={isLoggedIn} />
                    <Movies saveMovies={handleSaveMovies}/>
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <Header isLoggedIn={isLoggedIn} />
                    <SavedMovies />
                    <Footer />
                  </>
                </ProtectedRoute>
              }
              ></Route>
            <Route
              path="*"
              element={<PageNotFound />}
            ></Route>
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;