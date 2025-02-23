function getUniqueNumbers(arr) {
  let unique = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in unique) {
      continue;
    } else {
      unique[arr[i]] = 0;
    }
  }

  return Object.keys(unique);
}

console.log(getUniqueNumbers([2, 4, 5, 2, 1, 10]));
