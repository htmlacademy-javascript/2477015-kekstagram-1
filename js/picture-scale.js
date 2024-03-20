const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const imgUploadForm = document.querySelector('.img-upload__form');
const smallerControlButton = imgUploadForm.querySelector('.scale__control--smaller');
const biggerControlButton = imgUploadForm.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadForm.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview');

const setPictureScale = (value) => {
  imgUploadPreview.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

export const resetScalePicture = () => setPictureScale(MAX_SCALE);

const onSmallerControlButtonClick = () => {
  setPictureScale(
    Math.max (parseInt(scaleControlValue.value, 10) - SCALE_STEP, MIN_SCALE));
};

const onBiggerControlButtonClick = () => {
  setPictureScale(
    Math.min (parseInt(scaleControlValue.value, 10) + SCALE_STEP, MAX_SCALE));
};

smallerControlButton.addEventListener('click', onSmallerControlButtonClick);
biggerControlButton.addEventListener('click', onBiggerControlButtonClick);

