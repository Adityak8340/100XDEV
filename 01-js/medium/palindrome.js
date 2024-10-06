/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str1=str.toLowerCase();
  str1 = str1.replace(/[^a-zA-Z0-9]/g, '');
  let str2 = str1.split('').reverse().join('');
  return str1 === str2;
}

module.exports = isPalindrome;
