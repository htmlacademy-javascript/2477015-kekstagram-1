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
