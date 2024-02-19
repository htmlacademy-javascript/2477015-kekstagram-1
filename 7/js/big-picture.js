import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const socialComment = document.querySelector('.social__comment-count');
const socialComments = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const createBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.big-picture__img img').alt = picture.description;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
};

const createComment = (com) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture').src = com.avatar;
  comment.querySelector('.social__picture').alt = com.name;
  comment.querySelector('.social__text').textContent = com.message;

  return comment;
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  socialComments.append(fragment);
};

export const showBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  socialComment.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEscKeydown);

  createBigPicture(photo);
  renderComments(photo.comments);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});
