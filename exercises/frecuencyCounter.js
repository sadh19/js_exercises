function frecuencyCounter(arr) {
  let frecuency = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in frecuency) {
      frecuency[arr[i]] = frecuency[arr[i]] + 1;
    } else {
      frecuency[arr[i]] = 1;
    }
  }

  return frecuency;
}

console.log(frecuencyCounter([1, 1, 10, 24, 68, 24, 10, 9, 10]));
