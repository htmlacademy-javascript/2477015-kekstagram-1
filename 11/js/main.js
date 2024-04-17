import './functions.js';
import './big-picture.js';
import './render-gallery.js';
import './form-validate.js';
import './form.js';
import './picture-scale.js';
import './filters.js';
//import {createGallery} from './data.js';
import {renderPicturesGallery} from './gallery.js';
import {getPicture} from './api.js';
import {showAlertDialog} from './dialogs.js';

getPicture()
  .then((data) => {
    renderPicturesGallery(data);
  })
  .catch((error) => {
    showAlertDialog(error.message);
  });
