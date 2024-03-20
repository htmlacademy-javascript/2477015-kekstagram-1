const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const imgUploadForm = document.querySelector('.img-upload__form');
const smallerControlButton = imgUploadForm.querySelector('.scale__control--smaller');
const biggerControlButton = imgUploadForm.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadForm.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview');


let getScaleValue = parseInt(scaleControlValue.value, 10);

const scalePicture = (value) => {
  imgUploadPreview.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}`;
};

export const resetScalePicture = () => scalePicture(MAX_SCALE);

const onSmallerControlButtonClick = () => {

  if (getScaleValue > MIN_SCALE) {
    getScaleValue -= STEP_SCALE;
  }

  scalePicture(getScaleValue);
};

const onBiggerControlButtonClick = () => {
  if (getScaleValue < MAX_SCALE) {
    getScaleValue += STEP_SCALE;
  }

  scalePicture(getScaleValue);
};

smallerControlButton.addEventListener('click', onSmallerControlButtonClick);
biggerControlButton.addEventListener('click', onBiggerControlButtonClick);

