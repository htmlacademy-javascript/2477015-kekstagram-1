const FILTERS = {
  origin: {
    filter: 'none',
    unit: '',
    min: 100,
    max: 100,
    step: 1,
    start: 100,
    connect: 'lower',
  },
  chrome: {
    filter: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    connect: 'lower',
  },
  sepia: {
    filter: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    connect: 'lower',
  },
  marvin: {
    filter: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
    connect: 'lower',
  },
  phobos: {
    filter: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
    start: 3,
    connect: 'lower',
  },
  heat: {
    filter: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1,
    start: 3,
    connect: 'lower',
  }
};

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview');
const imgUploadEffectLevel = imgUploadForm.querySelector('.img-upload__effect-level');
const effectsList = imgUploadForm.querySelector('.effects__list');
const effectLevelValue = imgUploadForm.querySelector('.effect-level__value');
const effectLevelSlider = imgUploadForm.querySelector('.effect-level__slider');

let activeFilter = FILTERS.origin;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: FILTERS.origin.min,
    max: FILTERS.origin.max,
  },
  start:  FILTERS.origin.start,
  step:  FILTERS.origin.step,
  connect: FILTERS.origin.connect,
});

const setPictureEffect = () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  imgUploadPreview.style.filter =
  `${activeFilter.filter}(${effectLevelValue.value}${activeFilter.unit})`;
};

const updateSliderOptions = ({ min, max, start, step, connect}) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start,
    step,
    connect,
  });
};

export const resetPictureEffect = () => {
  imgUploadEffectLevel.classList.add('hidden');
  imgUploadPreview.style.filter = '';
  effectLevelValue.value = '';
};

effectsList.addEventListener('change', (evt) => {
  activeFilter = FILTERS[evt.target.value];

  if (evt.target.type === 'radio') {
    if (evt.target.value === 'none') {
      resetPictureEffect();
    } else {
      imgUploadEffectLevel.classList.remove('hidden');
      updateSliderOptions(activeFilter);
    }
  }
});

effectLevelSlider.noUiSlider.on('update', setPictureEffect);
