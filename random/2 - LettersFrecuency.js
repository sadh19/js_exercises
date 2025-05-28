function countFrecuency(word) {
  let counter = {};
  let characters = word.split("");

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] in counter) {
      counter[characters[i]] = counter[characters[i]] + 1;
    } else {
      counter[characters[i]] = 1;
    }
  }

  return counter;
}

console.log(countFrecuency("rana"));
console.log(countFrecuency("xilofono"));
