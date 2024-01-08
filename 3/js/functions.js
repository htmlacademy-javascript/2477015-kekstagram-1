// ТЗ №1: Функция для проверки, является ли строка палиндромом

function isPalindrome(value) {
  const result = value.replaceAll(' ', '').toLowerCase();
  const halflength = Math.floor(value.length / 2);

  for (let i = 0; i < halflength; ++i) {
    if (result[i] !== result[result.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false
isPalindrome(' Лёша на полке клопа нашёл  '); // true
isPalindrome('redivider'); // true
isPalindrome('detartRated'); // true
isPalindrome('123321'); // true
isPalindrome('rtrc'); // false
isPalindrome('123654321'); // false

// ТЗ №2: Функция, которая принимает строку, извлекает в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN

const extractNumbers = (value) => {
  const result = Number
    .parseInt(value.toString()
      .replaceAll(/[^0-9]/g, ''), 10);

  return result;
};

extractNumbers('2023 год'); // 2023
extractNumbers('ECMAScript 2022'); // 2022
extractNumbers('1 кефир, 0.5 батона'); // 105
extractNumbers('агент 007'); // 7
extractNumbers('а я томат'); // NaN
extractNumbers(2023); // 2023
extractNumbers(-1); // 1
extractNumbers(1.5); //15

/*
ТЗ №3: Функция, которая:
	1. принимает три параметра:
- исходную строку;
- минимальную длину;
- строку с добавочными символами.
	2. И возвращает исходную строку, дополненную указанными символами до заданной длины.
*/

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

const validateStrLength = (value, maxLength) => {
  const result = value.length <= maxLength;

  return result;
};

validateStrLength('проверяемая строка', 20); // true
validateStrLength('проверяемая строка', 18); // true
validateStrLength('проверяемая строка', 10);// false
validateStrLength('проверяемая строка', 5); // false
validateStrLength('проверяемая строка', 19); // false
