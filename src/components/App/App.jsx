import React from 'react';
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

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  function onLoginOut() {
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  }

  return (
    <div className="root">
      <div className="page">
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
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route
            path="/profile"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Profile onLoginOut={onLoginOut}/>
              </>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Movies />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <SavedMovies />
                <Footer />
              </>
            }
            ></Route>
          <Route
            path="*"
            element={<PageNotFound />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;