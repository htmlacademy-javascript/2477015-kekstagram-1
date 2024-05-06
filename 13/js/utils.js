const DEBOUNCE_TIMEOUT_DELAY = 500;

export const isEscapeKey = (key) => key === 'Escape';

export const debounce = (callback, timeoutDelay = DEBOUNCE_TIMEOUT_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
