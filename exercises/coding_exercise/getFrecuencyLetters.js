function getFrecuency(word) {
  let frecuency = {};
  const wordArr = word.split("");

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] in frecuency) {
      frecuency[wordArr[i]] = frecuency[wordArr[i]] + 1;
    } else {
      frecuency[wordArr[i]] = 1;
    }
  }

  return frecuency;
}

console.log(getFrecuency("eeaoiaoasjajskjjsa"));
