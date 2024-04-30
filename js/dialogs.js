import {isEscapeKey} from './utils.js';

const ALERT_SHOW_TIME = 3000;

const downloadErrorTemplate = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

export const showAlertDialog = () => {
  const errorFragment = downloadErrorTemplate.cloneNode(true);
  document.body.append(errorFragment);

  setTimeout(() => {
    errorFragment.remove();
  },
  ALERT_SHOW_TIME);
};

let currentDialog;

const removeDialog = () => {
  currentDialog.remove();
  currentDialog = null;
  document.removeEventListener('keydown', onDocumentKeydown, true);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt.key)) {
    removeDialog();
    evt.preventDefault();
    evt.stopPropagation();
  }
}

const onDialogClick = (evt) => {
  if (!evt.target.hasAttribute('data-close-dialog')) {
    return;
  }

  removeDialog();
};

export const showDialog = (template) => {
  currentDialog = template.cloneNode(true);
  document.addEventListener('keydown', onDocumentKeydown, true);
  currentDialog.addEventListener('click', onDialogClick);
  document.body.append(currentDialog);
};
