import {isEscapeKey} from './util.js';

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
  document.removeEventListener('keydown', onDocumentKeydown, true);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt.key)) {
    removeDialog();
    evt.preventDefault();
    evt.stopPropagation();
  }
}

const checkEvtTargetClassList = (evt, classList) => {
  const currentClassList = evt.target.classList;

  if (currentClassList.contains(`${classList}__inner`)) {
    return;
  }

  removeDialog();
};

const onCloseButtonClick = () => {
  removeDialog();
};

export const showDialog = (classList) => {
  currentDialog = document.querySelector(`#${classList}`)
    .cloneNode(true)
    .content
    .querySelector(`.${classList}`);
  document.body.append(currentDialog);
  currentDialog.classList.remove('hidden');
  const dialogCloseButton = currentDialog.querySelector(`.${classList}__button`);

  dialogCloseButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown, true);
  currentDialog.addEventListener('click',(evt) => checkEvtTargetClassList (evt, classList));
};
