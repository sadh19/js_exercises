function isPalindrome(word) {
  if (word.length < 3) {
    return false;
  }

  const wordArr = word.split("");

  let leftPointer = wordArr.length - 1;

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] !== wordArr[leftPointer]) {
      return false;
    } else {
      leftPointer--;
      continue;
    }
  }

  return true;
}

// console.log(isPalindrome("abba"));
// console.log(isPalindrome("oro"));
// console.log(isPalindrome("seres"));
// console.log(isPalindrome("radar"));
// console.log(isPalindrome("ana"));
// console.log(isPalindrome("comida"));
// console.log(isPalindrome("reconocer"));
// console.log(isPalindrome("love"));

function isPalindromePhrase(phrase) {
  let wordLowercase = phrase.toLowerCase();
  const phraseArr = wordLowercase.split(" ").join("").split("");

  if (phraseArr < 3) {
    return false;
  }

  let leftPointer = phraseArr.length - 1;

  for (let i = 0; i < phraseArr.length; i++) {
    if (phraseArr[i] !== phraseArr[leftPointer]) {
      return false;
    } else {
      leftPointer--;
    }
  }

  return true;
}

console.log(isPalindromePhrase("Anita lava la tina"));
console.log(isPalindromePhrase("Se van sus naves"));
console.log(isPalindromePhrase("Yo soy"));
console.log(isPalindromePhrase("oro"));
console.log(isPalindromePhrase("love"));
