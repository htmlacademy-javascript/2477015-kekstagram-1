import {isEscapeKey} from './util.js';

const SHOWN_COMMENTS_STEP = 5;
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const shownCommentsCount = bigPicture.querySelector('.shown-comments-count');
const totalCommentsCount = bigPicture.querySelector('.comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');

const createComment = (data) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

let shownComments = 0;
let socialComment = [];

const renderComments = () => {
  shownComments += SHOWN_COMMENTS_STEP;

  if (shownComments >= socialComment.length) {
    commentsLoader.classList.add('hidden');
    shownComments = socialComment.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragmentComment = document.createDocumentFragment();

  for (let i = 0; i < shownComments; i++) {
    fragmentComment.append(createComment(socialComment[i]));
  }

  socialComments.innerHTML = '';
  socialComments.append(fragmentComment);
  shownCommentsCount.textContent = shownComments;
  totalCommentsCount.textContent = socialComments.length;
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
  document.removeEventListener('keydown', onBigPictureKeydown);
};

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});

commentsLoader.addEventListener('click', () => {
  renderComments();
});

function onBigPictureKeydown (evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

export const showBigPicture = (photo) => {
  shownComments = 0;
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureKeydown);

  renderBigPicture(photo);

  socialComment = photo.comments;
  if (socialComment.length > 0) {
    renderComments();
  }
};
