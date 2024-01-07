// ТЗ №1: Функция для проверки, является ли строка палиндромом
const isPalindrome = (value) => {
  const string = value.replaceAll(' ', '').toLowerCase();
  const result = [...string].reverse().join('');

  return string === result;
};

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false
isPalindrome(' Лёша на полке клопа нашёл  '); // true

// ТЗ №2: Функция, которая принимает строку, извлекает в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
const extractNumber = (value) => {
  const result = Number
    .parseInt(value.toString()
      .replaceAll(/[^0-9]/g, ''), 10);

  return result;
};

extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат'); // NaN
extractNumber(2023); // 2023
extractNumber(-1); // 1
extractNumber(1.5); //15

/*
ТЗ №3: Функция, которая:
	1. принимает три параметра:
- исходную строку;
- минимальную длину;
- строку с добавочными символами.
	2. И возвращает исходную строку, дополненную указанными символами до заданной длины.
	3. Условия: Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
*/

// Через padStart()
const toAddSymbPadStart = (value, maxLength, newValue) => {
  const newString = value.padStart(maxLength, newValue);

  return newString;
};

toAddSymbPadStart('1', 2, '0'); // '01'
toAddSymbPadStart('1', 4, '0'); // '0001'
toAddSymbPadStart('q', 4, 'werty'); // 'werq'
toAddSymbPadStart('q', 4, 'we'); // 'wewq' (????)
toAddSymbPadStart('qwerty', 4, '0'); // 'qwerty'
toAddSymbPadStart('qwerty', 8, 0); // '00qwerty'

// Через slice() и repeat()
const toAddSymbols = (value, maxLength, addValue) => {
  const minLength = maxLength - value.length;

  const result = (minLength <= 0) ? value :
    addValue.slice(0, minLength % addValue.length) +
    addValue.repeat(minLength / addValue.length) +
    value;

  return result;
};

toAddSymbols('1', 2, '0'); // '01'
toAddSymbols('1', 4, '0'); // '0001'
toAddSymbols('q', 4, 'werty'); // 'werq'
toAddSymbols('q', 4, 'we'); // 'wweq'
toAddSymbols('qwerty', 4, '0'); // 'qwerty'

// ТЗ №3: Функция для проверки длины строки
const canLength = (value, maxLength) => {
  const result = value.length <= maxLength;

  return result;
};

canLength('проверяемая строка', 20); // true
canLength('проверяемая строка', 18); // true
canLength('проверяемая строка', 10);// false
canLength('проверяемая строка', 5); // false
canLength('проверяемая строка', 19); // false

