const PICTURE_FORMAT = ['.gif', '.jpg', '.jpeg', '.png'];

const uploadPreview = document.querySelector('.img-upload__preview img');
const uploadFile = document.querySelector('#upload-file');

const onUploadPictureChange = () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = PICTURE_FORMAT.some((it) => fileName.endsWith(it));

  if (matches) {
    uploadPreview.src = URL.createObjectURL(file);
  }
};

uploadFile.addEventListener('change', onUploadPictureChange);
