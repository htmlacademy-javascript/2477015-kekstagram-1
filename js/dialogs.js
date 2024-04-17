import {isEscapeKey} from './util.js';

const ALERT_SHOW_TIME = 3000;

const uploadErrorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const uploadErrorAlert = uploadErrorTemplate.querySelector('.error__inner');
const uploadErrorButton = uploadErrorTemplate.querySelector('.error__button');
const uploadSuccessTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const uploadSuccessButton = uploadSuccessTemplate.querySelector('.success__button');
const successWrapper = uploadSuccessTemplate.querySelector('.success__inner');
const downloadErrorTemplate = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

export const showAlertDialog = () => {
  const errorFragment = downloadErrorTemplate.cloneNode(true);
  document.body.append(errorFragment);

  setTimeout(() => {
    errorFragment.remove();
  },
  ALERT_SHOW_TIME);
};

const removeSuccessMessage = () => {
  uploadSuccessTemplate.remove();
  uploadSuccessButton.removeEventListener('click', removeSuccessMessage);
};

export const showSuccessMessage = () => {
  uploadSuccessTemplate.cloneNode(true);
  document.body.append(uploadSuccessTemplate);
  uploadSuccessButton.addEventListener('click', removeSuccessMessage);
  document.addEventListener('keydown', (evt) => {

    if (isEscapeKey(evt)) {
      removeSuccessMessage();
    }

  }, {once: true});
  uploadSuccessTemplate.addEventListener('click', (evt) => {

    if (evt.target !== successWrapper) {
      removeSuccessMessage();
    }

  }, {once: true});
};

const removeUploadErrorMessage = () => {
  uploadErrorTemplate.remove();
  uploadErrorButton.removeEventListener('click', removeUploadErrorMessage);
};

export const showErrorMessage = () => {
  uploadErrorTemplate.cloneNode(true);
  document.body.append(uploadErrorTemplate);
  uploadErrorButton.addEventListener('click', removeUploadErrorMessage);
  document.addEventListener('keydown', (evt) => {

    if(isEscapeKey(evt)) {
      removeUploadErrorMessage();
    }

  }, {once: true});
  document.addEventListener('click', (evt) => {

    if (evt.target !== uploadErrorAlert) {
      removeUploadErrorMessage();
    }

  }, {once: true});
};
