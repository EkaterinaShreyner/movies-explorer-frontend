import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import logo from '../../images/logo.svg';


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
  return (
    <div className="root">
      <div className="page">
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;