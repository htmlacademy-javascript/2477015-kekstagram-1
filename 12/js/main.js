import './functions.js';
import './big-picture.js';
import './render-gallery.js';
import './form-validate.js';
import './form.js';
import './picture-scale.js';
import './filters.js';
//import './upload-picture.js';
import {initSorting} from './picture-sort.js';
import {renderPicturesGallery} from './gallery.js';
import {getPictures} from './api.js';
import {showAlertDialog} from './dialogs.js';

getPictures()
  .then((data) => {
    renderPicturesGallery(data);
    initSorting(data);
  })
  .catch((error) => {
    showAlertDialog(error.message);
  });
