import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialComments = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');

const createComment = (data) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';

  const fragmentComment = document.createDocumentFragment();
  comments.forEach((data) => {
    const commentElement = createComment(data);
    fragmentComment.append(commentElement);
  });

  socialComments.append(fragmentComment);
};

const renderBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.big-picture__img img').alt = picture.description;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
};


const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});

function onBigPictureEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

export const showBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEscKeydown);

  renderBigPicture(photo);
  renderComments(photo.comments);
};
