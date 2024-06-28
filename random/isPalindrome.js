function isPalindrome(word) {
  let leftPointer = 3;

  let wordArr = word.split("");

  for (let i = wordArr.length - 4; i >= 0; i--) {
    if (wordArr[i] !== wordArr[leftPointer]) {
      return false;
    } else {
      leftPointer++;
    }
  }

  return true;
}

console.log(isPalindrome("oro"));
console.log(isPalindrome("seres"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("ana"));
console.log(isPalindrome("comida"));
console.log(isPalindrome("reconocer"));
console.log(isPalindrome("love"));
