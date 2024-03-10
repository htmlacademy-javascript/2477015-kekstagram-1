const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_AMOUNT = 5;
const VALID_HASHTAG_SYMBOLS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/i;

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadText = imgUploadForm.querySelector('.img-upload__text');
const textHashtags = imgUploadText.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

export const pristineForm = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper__error',
});

const isValidAmountTags = (normHashtags) => normHashtags.length <= MAX_HASHTAG_AMOUNT;

const uniqueHashtags = (normHashtags) => {
  const hashtags = new Set(normHashtags);

  return hashtags.size === normHashtags.length;
};

const isValidTags = (normHashtags) => normHashtags.every((tag) => VALID_HASHTAG_SYMBOLS.test(tag));

const normalizedHashtags = (value) => {
  const normHashtags = value
    .trim()
    .toLowerCase()
    .split(/\s+/);
  return isValidTags(normHashtags) && isValidAmountTags(normHashtags) && uniqueHashtags(normHashtags);
};

pristineForm.addValidator(
  textHashtags,
  normalizedHashtags,
  'Ошибка! Неверный формат хэш-тегов!');


const isValidComment = () => textDescription
  .value
  .length <= MAX_COMMENT_LENGTH;

pristineForm.addValidator(
  textDescription,
  isValidComment,
  `Ошибка! Длина комментария не более ${MAX_COMMENT_LENGTH} символов!`);

