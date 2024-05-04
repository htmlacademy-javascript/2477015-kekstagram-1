const DEBOUNCE_TIMEOUT_DELAY = 500;

export const isEscapeKey = (key) => key === 'Escape';

export const debounce = (callback, timeoutDelay = DEBOUNCE_TIMEOUT_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const sortByRandomly = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
