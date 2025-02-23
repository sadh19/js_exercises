function getRepeatedNumbers(arr) {
  let uniqueNumbers = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in uniqueNumbers) {
      continue;
    } else {
      uniqueNumbers[arr[i]] = 1;
    }
  }

  return Object.keys(uniqueNumbers);
}

console.log(getRepeatedNumbers([3, 4, 5, 6, 2, 1, 3, 4, 5, 7, 8, 10, 9, 1, 2]));
