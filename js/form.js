import {isEscapeKey} from './util.js';
import {isFormValid, resetValidation} from './form-validate.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

const closeForm = () => {
  imgUploadForm.reset();
  resetValidation();
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
    onCancelButtonClick();
  }
}

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  isFormValid();
});

imgUploadCancel.addEventListener('click', onCancelButtonClick);
imgUploadInput.addEventListener('change', onInputChange);
