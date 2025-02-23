function getUniqueItems(word) {
  let uniqueLetters = {};
  const wordArr = word.split("");

  for (let i = 0; i < wordArr.length; i++) {
    if (!(wordArr[i] in uniqueLetters)) {
      uniqueLetters[wordArr[i]] = 1;
    }
  }

  return Object.keys(uniqueLetters);
}

console.log(getUniqueItems("eeaoiaoasjajskjjsaf"));
