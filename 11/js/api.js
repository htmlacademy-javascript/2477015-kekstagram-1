const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Ошибка! Не удалось загрузить данные, попробуйте обновить страницу',
  SEND_DATA: 'Ошибка! Не удалось отправить форму, попробуйте ещё раз',
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(errorText ?? err.message);
    });

export const getPicture = () => load(Route.GET_DATA, ErrorText.GET_DATA);

export const sendPicture = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);
