import {debounce, sortByRandomly} from './utils.js';
import {renderGallery} from './render-gallery.js';

const MAX_PICTURE_COUNT = 10;

const sortingSection = document.querySelector('.img-filters');
const sortingForm = sortingSection.querySelector('.img-filters__form');

const SORTING_TYPE = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

let originalPictures = [];

const sortPicturesByType = (sortingType) => {
  const ordinaryPictures = [...originalPictures];

  switch (sortingType) {
    case SORTING_TYPE.RANDOM:
      return sortByRandomly(ordinaryPictures).slice(0, MAX_PICTURE_COUNT);
    case SORTING_TYPE.DISCUSSED:
      return ordinaryPictures.sort(sortByComments);
    default:
      return originalPictures;
  }
};

const onSortingClick = debounce((evt) => {
  if (evt.target.closest('.img-filters__button')) {
    sortingForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }

  const sortedPictures = sortPicturesByType(evt.target.id);
  renderGallery(sortedPictures);
});

export const initSorting = (data) => {
  sortingSection.classList.remove('img-filters--inactive');
  originalPictures = data;
  sortingSection.addEventListener('click', onSortingClick);
};
