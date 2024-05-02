import {debounce} from './utils.js';
import {renderGallery} from './render-gallery.js';

const MAX_PICTURE_COUNT = 10;

const sortingSection = document.querySelector('.img-filters');
const sortingForm = sortingSection.querySelector('.img-filters__form');
const picturesAll = document.querySelectorAll('.picture');
const picturesContainer = document.querySelector('.pictures container');

const SORTING_TYPE = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const removePictures = (newData) => picturesContainer.replaceChildren(picturesAll, newData);

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const returnRandom = () => Math.random() - 0.5;

let originalPictures = [];

const getSortingPictures = () => [...originalPictures];

const sortPicturesByType = (sortingType) => {
  const sortingPictures = getSortingPictures();

  switch (sortingType) {
    case SORTING_TYPE.DEFAULT:
      return originalPictures;
    case SORTING_TYPE.RANDOM:
      return sortingPictures.sort(returnRandom).slice(0, MAX_PICTURE_COUNT);
    case SORTING_TYPE.DISCUSSED:
      return sortingPictures.sort(sortByComments);
  }
};

export const initSorting = (data) => {
  sortingSection.classList.remove('img-filters--inactive');
  originalPictures = data;
  sortingSection.addEventListener('click', debounce((evt) => {
    if (evt.target.classList.contains('img-filters container')) {
      return;
    }

    sortingForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');

    const sortedPictures = sortPicturesByType(evt.target.id);

    removePictures(renderGallery(sortedPictures));
  }));
};
