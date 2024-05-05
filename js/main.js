import {initSorting} from './picture-sort.js';
import {renderGallery} from './gallery.js';
import {getPictures} from './api.js';
import {showAlertDialog} from './dialogs.js';
import './form.js';
import './upload-picture.js';

getPictures()
  .then((data) => {
    renderGallery(data);
    initSorting(data);
  })
  .catch((error) => {
    showAlertDialog(error.message);
  });
