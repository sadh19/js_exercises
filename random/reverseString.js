function reverseString(word) {
  let wordArr = word.split("");
  let reversedWord = "";

  for (let i = wordArr.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + wordArr[i];
  }

  return reversedWord;
}

console.log(reverseString("closer"));
console.log(reverseString("smile"));
console.log(reverseString("nothing in my way"));
