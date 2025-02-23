function getFrecuency(arr) {
  let frecuencyCounter = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in frecuencyCounter) {
      frecuencyCounter[arr[i]] = frecuencyCounter[arr[i]] + 1;
    } else {
      frecuencyCounter[arr[i]] = 1;
    }
  }

  return frecuencyCounter;
}

console.log(
  getFrecuency([3, 4, 5, 6, 2, 1, 3, 4, 5, 7, 8, 10, 9, 1, 2, 10, 10])
);
