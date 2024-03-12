import './functions.js';
import './big-picture.js';
import './render-gallery.js';
import './form-validate.js';
import './form.js';
import {createGallery} from './data.js';
import {renderPicturesGallery} from './gallery.js';

renderPicturesGallery(createGallery());
