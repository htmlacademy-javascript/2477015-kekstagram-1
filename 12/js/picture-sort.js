import {debounce} from './utils.js';
import {renderGallery} from './render-gallery.js';

const MAX_PICTURE_COUNT = 10;

const sortingSection = document.querySelector('.img-filters');
const sortingForm = sortingSection.querySelector('.img-filters__form');
const sortingButtons = sortingForm.querySelectorAll('.img-filters__button');
const picturesContainer = document.querySelector('.pictures');
const imgUpload = picturesContainer.querySelector('.img-upload');

const SORTING = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const removePictures = () => {
  picturesContainer.innerHTML = '';
  picturesContainer.append(imgUpload);
};

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const sortByRandom = () => Math.random() - 0.5;

const sortingPictures = (data) => {
  switch (data) {
    case SORTING.DEFAULT:
      return (pictures) => [...pictures];
    case SORTING.RANDOM:
      return (pictures) => [...pictures].sort(sortByRandom).slice(0, MAX_PICTURE_COUNT);
    case SORTING.DISCUSSED:
      return (pictures) => [...pictures].sort(sortByComments);
  }
};

const sortingSwitch = (data) => {
  sortingSection.addEventListener('click', debounce(
    (evt) => {
      if (!evt.target.classList.contains('img-filters__button') || evt.target.classList.contains('img-filters__button--active')) {
        return;
      }

      sortingButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
      evt.target.classList.add('img-filters__button--active');

      const activesortingPictures = sortingPictures(evt.target.id);
      const currentPictures = activesortingPictures(data);

      removePictures();
      renderGallery(currentPictures);
    }
  ));
};

export const initSorting = (data) => {
  sortingSection.classList.remove('img-filters--inactive');
  sortingSwitch(data);
};
