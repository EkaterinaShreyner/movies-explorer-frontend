export const BASE_URL = "http://localhost:4000";
// export const BASE_URL = "https://api.my-movies.nomoredomainsicu.ru";

// регистрация пользователя
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}

// авторизация пользователя
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}

// проверка токена
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      authorization : `Bearer ${token}`,
    }
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}