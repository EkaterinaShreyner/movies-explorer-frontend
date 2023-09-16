const STATUS_CODE_400 = 400;
const STATUS_CODE_401 = 401;
const STATUS_CODE_409 = 409;

const ERROR_MESSAGE = {
  BAD_REQUEST_PROFILE: "При обновлении профиля произошла ошибка",
  CONFLICT_USER_DATA: "Пользователь с таким email уже существует.",
  userId: 'Пользователь c таким id не найден',
  langRu: 'Название должно быть на русском языке',
  langEn: 'Название должно быть на английском языке',
  USER_AUTH: "При авторизации произошла ошибка.",
  USER_CREDENTIALS: "Вы ввели неправильный логин или пароль",
  userAuth: ' Необходима авторизация',
  server: 'На сервере произошла ошибка',
  movieId: 'Фильм с таким id не найдена',
  movieOwner: 'Попытка удаление чужого фильма невозможна',
  movieData: 'Переданы некорректные данные фильма',
  movieDataId: 'Переданы некорректные данные id фильма',
  notFound: 'Страница не найдена',
};

const SUCCESS_MESSAGE = "Данные успешно обновлены";

export {
  STATUS_CODE_400,
  STATUS_CODE_401,
  STATUS_CODE_409,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE
}