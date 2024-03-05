const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadText = imgUploadForm.querySelector('.img-upload__text');
const textHashtags = imgUploadText.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_LENGTH = 20;
const MAX_AMOUNT_HASHTAG = 5;
const VALID_HASHTAG_SYMBOLS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/i;


export const pristineForm = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper__error',
});

const getNormalizeHashtags = () =>
  textHashtags.value
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((tag) => tag === '#');


const hasValidAmountTags = (value) => getNormalizeHashtags(value).length <= MAX_AMOUNT_HASHTAG;

const hasValidComment = (value) => textDescription(value).length <= MAX_COMMENT_LENGTH;

const hasValidHashtags = (value) => textHashtags(value).length <= MAX_HASHTAG_LENGTH;

const hasUniqueHashtags = () => {
  const hashtags = getNormalizeHashtags();
  const newHashtags = new Set(hashtags);

  return newHashtags.size === hashtags.length;
};

const hasValidTags = (value) => getNormalizeHashtags(value).every((tag) => VALID_HASHTAG_SYMBOLS.test(tag));

export const getValidForm = () => {

  pristineForm.addValidator(
    textDescription,
    hasValidComment,
    `Ошибка! Длина комментария не более ${MAX_COMMENT_LENGTH} символов!`);

  pristineForm.addValidator(
    textHashtags,
    hasValidHashtags,
    `Ошибка! Длина хэш-тега не более ${MAX_HASHTAG_LENGTH} символов!`);

  pristineForm.addValidator(
    textHashtags,
    hasValidTags,
    'Ошибка! Неверный формат хэш-тегов!');

  pristineForm.addValidator(
    textHashtags,
    hasValidAmountTags,
    `Ошибка! Не более ${MAX_AMOUNT_HASHTAG} хэш-тегов!`);

  pristineForm.addValidator(
    textHashtags,
    hasUniqueHashtags,
    'Ошибка! один и тот же хэш-тег не может быть использован повторно!');

  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristineForm.validate();
  });
};


