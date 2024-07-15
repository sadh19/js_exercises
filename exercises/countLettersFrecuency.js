function lettersFrecuency(word) {
  let frequency = {};

  let wordArr = word.split("");

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] !== " ") {
      if (wordArr[i] in frequency) {
        frequency[wordArr[i]] = frequency[wordArr[i]] + 1;
      } else {
        frequency[wordArr[i]] = 1;
      }
    }
  }

  return frequency;
}

console.log(lettersFrecuency("treeeeee"));
console.log(lettersFrecuency("heart"));
console.log(lettersFrecuency("blue moon"));
console.log(lettersFrecuency("sinatra"));
