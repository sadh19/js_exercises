function getUniqueElements(arr) {
  let unique = {};
  let uniqueNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in unique)) {
      unique[arr[i]] = 1;
    }
  }

  for (let key in unique) {
    uniqueNumbers.push(parseInt(key));
  }

  /* Object.keys(unique).map((num) => {
    uniqueNumbers.push(parseInt(num));
  }); */

  return uniqueNumbers;
}

console.log(getUniqueElements([2, 2, 3, 4, 5, 1, 2, 3, 3, 5, 10]));
