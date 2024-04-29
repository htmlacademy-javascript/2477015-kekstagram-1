import {useDebounce} from './util.js';
import {renderGallery} from './render-gallery.js';

const MAX_PICTURE_COUNT = 10;

const sortingSection = document.querySelector('.img-filters');
const sortingForm = sortingSection.querySelector('.img-filters__form');
const sortingButtons = sortingForm.querySelectorAll('.img-filters__button');
const activeButton = sortingForm.querySelector('.img-filters__button--active');

const removePictures = () => {
  const picturesAll = document.querySelectorAll('.picture');
  picturesAll.forEach((pictures) => pictures.remove());
};

const sortingSwitch = () => {
  sortingButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      activeButton.classList.remove('img-filters__button--active');
      evt.target.classList.add('img-filters__button--active');
    });
  });
};

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const sortingPictures = (pictures) => {
  const currentPictures = pictures.slice();

  const onSortingButtonClick = (evt) => {
    if (evt.target.matches('#filter-default')) {
      removePictures();
      renderGallery(currentPictures);
    }

    if (evt.target.matches('#filter-random')) {
      removePictures();
      const randomUserPhotos = currentPictures
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, MAX_PICTURE_COUNT);
      renderGallery(randomUserPhotos);
    }

    if (evt.target.matches('#filter-discussed')) {
      removePictures();
      const discussedPhotos = currentPictures
        .slice()
        .sort(sortByComments);
      renderGallery(discussedPhotos);
    }
  };

  sortingForm.addEventListener('click', useDebounce(onSortingButtonClick));
};


export const renderSortingPictures = (data) => {
  sortingSection.classList.remove('img-filters--inactive');
  sortingSwitch();
  sortingPictures(data);
};
