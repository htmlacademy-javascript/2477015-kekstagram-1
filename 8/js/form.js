import {isEscapeKey} from './util.js';
import {pristineForm} from './form-validate.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

export const openForm =
  imgUploadInput.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    imgUploadCancel.addEventListener('click', closeForm);
    document.addEventListener('keydown', onFormKeydown);
  });

function closeForm () {
  imgUploadForm.reset();
  pristineForm.reset();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormKeydown);
}

const onInputInFocus = () =>
  document.activeElement === textHashtags ||
  document.activeElement === textDescription;

function onFormKeydown (evt) {
  if (isEscapeKey(evt.key) && !onInputInFocus()) {
    evt.preventDefault();
    closeForm();
  }
}

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristineForm.validate();
});

