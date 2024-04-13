import {isEscapeKey} from './util.js';

const ALERT_SHOW_TIME = 3000;

const errorModalAlert = document.querySelector('.error');
const successModalAlert = document.querySelector('.success');
const successButton = document.querySelector('.success__button');
const errorButton = document.querySelector('.error__button');
const errorMessageTemplate = document
  .querySelector('#error')
  .content;
const successMessageTemplate = document
  .querySelector('#success')
  .content;

export const showMessageAlert = () => {
  const errorTemplate = document.querySelector('#data-error')
    .content
    .querySelector('.data-error');
  const errorFragment = errorTemplate.cloneNode(true);
  document.body.append(errorFragment);

  setTimeout(() => {
    errorFragment.remove();
  },
  ALERT_SHOW_TIME);
};

const removeMessage = () => {
  const selectedElement = successModalAlert || errorModalAlert;
  selectedElement.remove();
  document.body.removeEventListener('click', onBodyClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    removeMessage();
  }
}

function onBodyClick(evt) {
  if (evt.target.closest('.success__inner') || (evt.target.closest('.error__inner'))) {
    return;
  }
  removeMessage();
}

const onCloseButtonClick = () => {
  removeMessage();
};

const showMessage = (chosenElement, chosenButton) => {
  document.body.append(chosenElement);
  chosenElement
    .querySelector(chosenButton)
    .addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.addEventListener('click', onBodyClick);
};

export const showSuccessMessage = () => {
  showMessage(successMessageTemplate, successButton);
};

export const showErrorMessage = () => {
  showMessage(errorMessageTemplate, errorButton);
};
