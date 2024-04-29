const DEBOUNCE_TIMEOUT_DELAY = 500;

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export const getRandomArrElement = (newArr) =>
  newArr[getRandomInteger(0, newArr.length - 1)];

export const isEscapeKey = (key) => key === 'Escape';

export const useDebounce = (callback, timeoutDelay = DEBOUNCE_TIMEOUT_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
