function countBs(word) {

  let counter = 0;

  for (let temp = 0; temp <= word.length - 1; temp++) {
    if (word[temp] === "B") {
      counter++
    }
  }
  return counter;
}

console.log(countBs("BBBBb"));


function countChar(word, lettertoFind) {

  let counter = 0;

  for (let temp = 0; temp <= word.length - 1; temp++) {
    if (word[temp] === lettertoFind) {
      counter++
    }
  }
  return counter;
}


console.log(countChar("BBBBbacacacacac", "c"));

