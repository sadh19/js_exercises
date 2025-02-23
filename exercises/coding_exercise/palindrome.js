function isPalindrome(word) {
  let wordArr = word.toLowerCase().split(" ").join("").split("");
  let rightPointer = wordArr.length - 1;

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] !== wordArr[rightPointer]) {
      return false;
    } else {
      rightPointer--;
    }
  }

  return true;
}

console.log(isPalindrome("Anita lava la tina"));
