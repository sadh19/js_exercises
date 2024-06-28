function lettersFrecuency(word) {
  let frecuency = {};
  let wordArr = word.split("");

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] in frecuency) {
      frecuency[wordArr[i]]++;
    } else {
      frecuency[wordArr[i]] = 1;
    }
  }

  return frecuency;
}

console.log(lettersFrecuency("treeeeee"));
