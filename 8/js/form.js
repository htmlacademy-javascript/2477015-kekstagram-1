import {isEscapeKey} from './util.js';
import {getValidForm, pristineForm} from './form-validate.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

export const openForm = () => {
  imgUploadInput.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    imgUploadCancel.addEventListener('click', closeForm);
    document.addEventListener('keydown', onFormKeydown);
    getValidForm();
  });
};

function closeForm () {
  imgUploadForm.reset();
  pristineForm.reset();
  textHashtags.value = '';
  imgUploadInput.value = '';
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormKeydown);
}

function onFormKeydown (evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    closeForm();
  }
}

imgUploadCancel.addEventListener('click', () => {
  closeForm();
});

const inputInFocus = (evt) => {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

textHashtags.addEventListener('keydown', inputInFocus);
textDescription.addEventListener('keydown', inputInFocus);
