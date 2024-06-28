function getUniqueElements(arr) {
  let uniqueElements = {};

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] in uniqueElements) {
      continue;
    } else {
      uniqueElements[arr[i]] = 1;
    }
  }

  return Object.keys(uniqueElements);
}

console.log(getUniqueElements([2, 2, 3, 4, 5, 1, 2, 3, 3, 5, 10]));
