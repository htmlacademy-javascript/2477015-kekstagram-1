import {showBigPicture} from './big-picture.js';
import {renderGallery} from './render-gallery.js';

const picturesContainer = document.querySelector('.pictures');

export const renderPicturesGallery = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const picture = evt.target.closest('[data-picture-id]');

    if (!picture) {
      return;
    }
    evt.preventDefault();
    const photo = pictures
      .find((elem) => elem.id === Number(picture.dataset.pictureId));
    showBigPicture(photo);
  });

  renderGallery(pictures);
};
