const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesContainer = document.querySelector('.pictures-container');

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
