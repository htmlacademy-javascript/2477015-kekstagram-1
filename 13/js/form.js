import {isEscapeKey} from './utils.js';
import {isFormValid, resetValidation} from './form-validate.js';
import {resetScalePicture} from './picture-scale.js';
import {resetPictureEffect} from './filters.js';
import {sendPicture} from './api.js';
import {showDialog} from './dialogs.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');
const submitButton = imgUploadForm.querySelector('.img-upload__submit');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const SubmitButtonText = {
  DEFAULT: 'Опубликовать',
  POST: 'Публикую...'
};

const switchSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled
    ? SubmitButtonText.POST
    : SubmitButtonText.DEFAULT;
};

export const closeForm = () => {
  imgUploadForm.reset();
  resetValidation();
  resetScalePicture();
  resetPictureEffect();
  switchSubmitButton(false);
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormKeydown);
};

const onCancelButtonClick = () => {
  closeForm();
};

const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormKeydown);
  resetPictureEffect();
};

const onInputChange = () => {
  openForm();
};

const isInputInFocus = () =>
  document.activeElement === textHashtags ||
  document.activeElement === textDescription;

function onFormKeydown (evt) {
  if (isEscapeKey(evt.key) && !isInputInFocus()) {
    evt.preventDefault();
    closeForm();
  }
}

imgUploadCancel.addEventListener('click', onCancelButtonClick);
imgUploadInput.addEventListener('change', onInputChange);

const setUserFormSubmit = (evt) => {
  evt.preventDefault();

  if (isFormValid) {
    switchSubmitButton(true);
    sendPicture(new FormData(evt.target))
      .then(() => {
        closeForm();
        showDialog(successTemplate);
      })
      .catch(() => {
        showDialog(errorTemplate);
      })
      .finally (() => {
        switchSubmitButton(false);
      });
  }
};

imgUploadForm.addEventListener('submit', setUserFormSubmit);
