const isPalindrome = (value) => {
  const pureLoweCaseStr = value.replaceAll(' ', '').toLowerCase();
  const halfLength = Math.floor(value.length / 2);

  for (let i = 0; i < halfLength; ++i) {
    if (pureLoweCaseStr[i] !== pureLoweCaseStr.at(-i - 1)) {
      return false;
    }
  }

  return true;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome(' Лёша на полке клопа нашёл  ');
isPalindrome('redivider');
isPalindrome('detartRated');
isPalindrome('123321');
isPalindrome('rtrc');
isPalindrome('123654321');


const extractNumbers = (value) =>
  Number.parseInt(value.toString().replaceAll(/[^0-9]/g, ''), 10);

extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('агент 007');
extractNumbers('а я томат');
extractNumbers(2023);
extractNumbers(-1);
extractNumbers(1.5);


const toAddSymbols = (value, maxLength, addValue) => {
  const minLength = maxLength - value.length;
  if (minLength <= 0) {
    return value;
  }
  return addValue.slice(0, minLength % addValue.length) +
      addValue.repeat(minLength / addValue.length) +
      value;
};

toAddSymbols('1', 2, '0');
toAddSymbols('1', 4, '0');
toAddSymbols('q', 4, 'werty');
toAddSymbols('q', 4, 'we');
toAddSymbols('qwerty', 4, '0');
toAddSymbols('fqthrth', 15, '7878787555');


const validateStrLength = (value, maxLength) =>
  value.length <= maxLength;

validateStrLength('проверяемая строка', 20);
validateStrLength('проверяемая строка', 18);
validateStrLength('проверяемая строка', 10);
validateStrLength('проверяемая строка', 5);
validateStrLength('проверяемая строка', 19);
