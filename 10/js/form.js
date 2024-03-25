import {isEscapeKey} from './util.js';
import {isFormValid, resetValidation} from './form-validate.js';
import {resetScalePicture} from './picture-scale.js';
import {resetPictureEffect} from './filters.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

const closeForm = () => {
  imgUploadForm.reset();
  resetValidation();
  resetScalePicture();
  resetPictureEffect();
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

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  isFormValid();
});

imgUploadCancel.addEventListener('click', onCancelButtonClick);
imgUploadInput.addEventListener('change', onInputChange);
