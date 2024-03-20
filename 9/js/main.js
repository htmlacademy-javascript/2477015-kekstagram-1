import './functions.js';
import './big-picture.js';
import './render-gallery.js';
import './form-validate.js';
import './form.js';
import './scale-picture.js';
import './effects-picture.js';
import {createGallery} from './data.js';
import {renderPicturesGallery} from './gallery.js';

renderPicturesGallery(createGallery());

