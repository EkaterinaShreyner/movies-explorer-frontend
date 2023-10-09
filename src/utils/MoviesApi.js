export const MOVIES_URL = "https://api.nomoreparties.co";

// регистрация пользователя
export const getMovies = () => {
  return fetch(`${MOVIES_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}