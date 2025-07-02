// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let reverse = 0;
  let input = x;

  while (input > 0) {
    const lastDigit = input % 10;
    reverse = reverse * 10 + lastDigit;
    input = Math.floor(input / 10);
  }

  return x === reverse;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
