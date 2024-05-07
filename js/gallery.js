import {showBigPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures-container');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

let pictures = [];

const createPicture = (picture) => {
  const pictureClone = pictureTemplate.cloneNode(true);

  pictureClone.querySelector('.picture__likes').textContent = picture.likes;
  pictureClone.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureClone.querySelector('.picture__img').src = picture.url;
  pictureClone.querySelector('.picture__img').alt = picture.description;
  pictureClone.dataset.pictureId = picture.id;

  return pictureClone;
};

export const renderGallery = (data) => {
  picturesContainer.innerHTML = '';
  const picturesFragment = document.createDocumentFragment();

  data.forEach((picture) => {
    picturesFragment.append(createPicture(picture));
  });

  picturesContainer.append(picturesFragment);
};

picturesContainer.addEventListener('click', (evt) => {
  const picture = evt.target.closest('[data-picture-id]');

  if (!picture) {
    return;
  }

  if (picture.id === undefined) {
    return;
  }

  evt.preventDefault();

  const photo = pictures
    .find((elem) => elem.id === Number(picture.dataset.pictureId));

  if (!photo) {
    return;
  }

  showBigPicture(photo);
});

export const initGallery = (data) => {
  pictures = data;
  renderGallery(pictures);
};

export const getPhotos = () => [...pictures];
