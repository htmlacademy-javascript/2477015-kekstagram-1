const miniatureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createMiniature = (picture) => {
  const cloneMiniature = miniatureTemplate.cloneNode(true);
  cloneMiniature.querySelector('.picture__likes').textContent = picture.likes;
  cloneMiniature.querySelector('.picture__comments').textContent = picture.comments.length;
  cloneMiniature.querySelector('.picture__img').src = picture.url;
  cloneMiniature.querySelector('.picture__img').alt = picture.description;

  return cloneMiniature;
};

export const createMiniatures = (pictures) => {
  const miniaturesFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    miniaturesFragment.append(createMiniature(picture));
  });
  const picturesContainer = document.querySelector('.pictures');
  picturesContainer.append(miniaturesFragment);
};
