import './functions.js';
import './big-picture.js';
import './render-gallery.js';
import './form-validate.js';
import {onUploadPicture} from './form.js';
import {createGallery} from './data.js';
import {renderPicturesGallery} from './gallery.js';

renderPicturesGallery(createGallery());
onUploadPicture();
