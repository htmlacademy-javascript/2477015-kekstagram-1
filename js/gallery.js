import {showBigPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures-container');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicture = (picture) => {
  const clonePicture = pictureTemplate.cloneNode(true);

  clonePicture.querySelector('.picture__likes').textContent = picture.likes;
  clonePicture.querySelector('.picture__comments').textContent = picture.comments.length;
  clonePicture.querySelector('.picture__img').src = picture.url;
  clonePicture.querySelector('.picture__img').alt = picture.description;
  clonePicture.dataset.pictureId = picture.id;

  return clonePicture;
};

export const renderGallery = (pictures) => {
  picturesContainer.innerHTML = '';
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    picturesFragment.append(createPicture(picture));
  });

  picturesContainer.append(picturesFragment);
};

export const renderPicturesGallery = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const picture = evt.target.closest('[data-picture-id]');

    if (!picture) {
      return;
    }

    evt.preventDefault();

    if (picture.id !== undefined) {
      const photo = pictures
        .find((elem) => elem.id === Number(picture.dataset.pictureId));
      showBigPicture(photo);
    }
  });
};
