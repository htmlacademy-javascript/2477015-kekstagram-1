import {debounce} from './utils.js';
import {renderGallery} from './gallery.js';

const MAX_PICTURE_COUNT = 10;

const SORTING_TYPE = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const sortingSection = document.querySelector('.img-filters');
const sortingForm = sortingSection.querySelector('.img-filters__form');

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const returnRandomNumber = () => Math.random() - 0.5;

let originalPictures = [];

const sortPicturesByType = (sortingType) => {
  const ordinaryPictures = [...originalPictures];

  switch (sortingType) {
    case SORTING_TYPE.RANDOM:
      return ordinaryPictures.sort(returnRandomNumber).slice(0, MAX_PICTURE_COUNT);
    case SORTING_TYPE.DISCUSSED:
      return ordinaryPictures.sort(sortByComments);
    default:
      return originalPictures;
  }
};

const onSortingClick = debounce((evt) => {
  if (!evt.target.closest('.img-filters__button')) {
    return;
  }

  sortingForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');

  const sortedPictures = sortPicturesByType(evt.target.id);
  renderGallery(sortedPictures);
});

export const initSorting = (data) => {
  sortingSection.classList.remove('img-filters--inactive');
  originalPictures = data;
  sortingSection.addEventListener('click', onSortingClick);
};
