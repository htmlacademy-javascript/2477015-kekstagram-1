"use strict";

// ТЗ №1: Функция для проверки, является ли строка палиндромом

function checkPalindrome(value) {
  // Через окно ввода: let value = prompt("Укажите значение");
  value = value.replaceAll(" ", "").toLowerCase();
  let result = [...value].reverse().join("");
  value == result
    ? console.log("Это палиндром")
    : console.log("Это не палиндром");
}
checkPalindrome("топот"); // true
checkPalindrome("ДовОд"); // true
checkPalindrome("Кекс"); // false
checkPalindrome(" Лёша на полке клопа нашёл  "); // true

// ТЗ №2: Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN

function checkNumber(value) {
  let result = Number.parseInt(value.toString().replaceAll(/[^0-9]/g, ""));
  return console.log(result);
}
checkNumber("2023 год"); // 2023
checkNumber("ECMAScript 2022"); // 2022
checkNumber("1 кефир, 0.5 батона"); // 105
checkNumber("агент 007"); // 7
checkNumber("а я томат"); // NaN
checkNumber(2023); // 2023
checkNumber(-1); // 1
checkNumber(1.5); //15

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
function toAddSymbPadStart(value, maxLength, newValue) {
  let newString = value.toString().padStart(maxLength, newValue);
  console.log(newString);
}
toAddSymbPadStart("1", 2, "0"); // '01'
toAddSymbPadStart("1", 4, "0"); // '0001'
toAddSymbPadStart("q", 4, "werty"); // 'werq'
toAddSymbPadStart("q", 4, "we"); // 'wewq' (????)
toAddSymbPadStart("qwerty", 4, "0"); // 'qwerty'
toAddSymbPadStart("qwerty", 8, 0); // '00qwerty'

// Через slice() и repeat()
let toAddSymbols = function (value, maxLength, addValue) {
  let minLength = maxLength - value.length;
  if (minLength <= 0) {
    return value;
  }
  return (
    addValue.slice(0, minLength % addValue.length) +
    addValue.repeat(minLength / addValue.length) +
    value
  );
};
console.log(toAddSymbols("1", 2, "0")); // '01'
console.log(toAddSymbols("1", 4, "0")); // '0001'
console.log(toAddSymbols("q", 4, "werty")); // 'werq'
console.log(toAddSymbols("q", 4, "we")); // 'wweq'
console.log(toAddSymbols("qwerty", 4, "0")); // 'qwerty'

// ТЗ №3: Функция для проверки длины строки

function checkLength(value, maxLength) {
  // Через окно ввода: let value = prompt("Укажите значение");
  let result = value.length <= maxLength ? true : false;
  console.log(result);
}
checkLength("проверяемая строка", 20); // true
checkLength("проверяемая строка", 18); // true
checkLength("проверяемая строка", 10); // false
checkLength("проверяемая строка", 5); // false
checkLength("проверяемая строка", 19); // false
