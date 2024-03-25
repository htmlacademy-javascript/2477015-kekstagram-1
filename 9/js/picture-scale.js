const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const imgUploadForm = document.querySelector('.img-upload__form');
const smallerControlButton = imgUploadForm.querySelector('.scale__control--smaller');
const biggerControlButton = imgUploadForm.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadForm.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview');

let getScaleValue = parseInt(scaleControlValue.value, 10);

const setPictureScale = (value) => {
  imgUploadPreview.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const onSmallerControlButtonClick = () => {
  if (getScaleValue <= MIN_SCALE) {
    return;
  }

  setPictureScale(Math.max(getScaleValue -= SCALE_STEP, MIN_SCALE));
};

const onBiggerControlButtonClick = () => {
  if (getScaleValue >= MAX_SCALE) {
    return;
  }

  setPictureScale(Math.min((getScaleValue += SCALE_STEP), MAX_SCALE));
};

export const resetScalePicture = () => {
  getScaleValue = MAX_SCALE;
  setPictureScale(getScaleValue);
};

smallerControlButton.addEventListener('click', onSmallerControlButtonClick);
biggerControlButton.addEventListener('click', onBiggerControlButtonClick);
