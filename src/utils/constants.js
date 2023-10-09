const STATUS_CODE_400 = 400;
const STATUS_CODE_401 = 401;
const STATUS_CODE_409 = 409;

const ERROR_MESSAGE = {
  BAD_REQUEST_PROFILE: "При обновлении профиля произошла ошибка",
  CONFLICT_USER_DATA: "Пользователь с таким email уже существует.",
  NOT_FOUND_MOVIES: "Ничего не найдено",
  EMPTY_TEXT_INPUT: "Введите название фильма",
  USER_AUTH: "При авторизации произошла ошибка.",
  USER_CREDENTIALS: "Вы ввели неправильный логин или пароль",
};

const DURATION_SHORT_MOVIES = 40;

const SCREEN_SIZE = {
  DESKTOP: 1280,
  TABLET: 783,
  MOBILE: 320
}

const MORE_MOVIES = {
  DESKTOP: 3,
  TABLET: 2,
  MOBILE: 2
}

const DISPLAYED_MOVIES = {
  DESKTOP: 12,
  TABLET: 8,
  MOBILE: 5
}

const SUCCESS_MESSAGE = "Данные успешно обновлены";

export {
  STATUS_CODE_400,
  STATUS_CODE_401,
  STATUS_CODE_409,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  DURATION_SHORT_MOVIES,
  SCREEN_SIZE,
  MORE_MOVIES,
  DISPLAYED_MOVIES
}