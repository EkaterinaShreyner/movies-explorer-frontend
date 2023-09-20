class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

    //ответ от сервера 
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // return Promise.reject(`Что-то пошло не так: ${res.status}`);
    return Promise.reject(res.status);
  }

  // получение данных текущего пользователя
  getCurrentUser(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      // headers: this._headers
      headers: {
        ...this._headers,
        authorization : `Bearer ${token}`,
      }
    })
      .then(this._getResponse)
  }

  // получение данных текущего пользователя
  patchUserInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      // headers: this._headers
      headers: {
        ...this._headers,
        authorization : `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
      .then(this._getResponse)
  }
  
  //получить массив объектов с фильмами
  getMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      // headers: this._headers,
      headers: {
        ...this._headers,
        authorization : `Bearer ${token}`,
      }
    })
      .then(this._getResponse)
  }

  // сохранить фильм
  saveMovie(movie, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        authorization : `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then(this._getResponse)
  }
}

const mainApi = new Api({
  url: 'http://localhost:4000',
  // url: 'http://localhost:3000',
  // url: 'https://api.my-movies.nomoredomainsicu.ru',
  headers: {
    // authorization: 'eb88a784-5abe-4513-8117-377adafa9ddc',
    // authorization: `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'application/json'
  }
})

export default mainApi;