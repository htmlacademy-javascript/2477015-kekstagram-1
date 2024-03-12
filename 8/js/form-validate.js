const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_AMOUNT = 5;
const VALID_HASHTAG_SYMBOLS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/i;

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadText = imgUploadForm.querySelector('.img-upload__text');
const textHashtags = imgUploadText.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

const validation = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper__error',
});

export const isFormValid = () => validation.validate();
export const resetValidation = () => validation.reset();

const isValidAmountTags = (hashtags) => hashtags.length <= MAX_HASHTAG_AMOUNT;

const isTagsUnique = (hashtags) => new Set(hashtags).size === hashtags.length;

const isTagsValid = (hashtags) => hashtags.every((tag) => VALID_HASHTAG_SYMBOLS.test(tag));

const isTagFieldValid = (value) => {
  const hashtags = value
    .trim()
    .toLowerCase()
    .split(/\s+/);

  return isTagsValid(hashtags) && isValidAmountTags(hashtags) && isTagsUnique(hashtags);
};

validation.addValidator(
  textHashtags,
  isTagFieldValid,
  'Ошибка! Неверный формат хэш-тегов!');


const isCommentValid = () => textDescription.value.length <= MAX_COMMENT_LENGTH;

validation.addValidator(
  textDescription,
  isCommentValid,
  `Ошибка! Длина комментария не более ${MAX_COMMENT_LENGTH} символов!`);
