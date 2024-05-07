import {initSorting} from './picture-sort.js';
import {showAlertDialog} from './dialogs.js';
import {initGallery} from './gallery.js';
import {getPictures} from './api.js';
import './form.js';

getPictures()
  .then((data) => {
    initGallery(data);
    initSorting();
  })
  .catch((error) => {
    showAlertDialog(error.message);
  });
