//Fusionar dos arrays numericos ordenados sin necesidad de crear otro
function swapValues(idValueOne, idValueTwo, arr) {
  let valueTwo = arr[idValueTwo];
  arr[idValueTwo] = arr[idValueOne];
  arr[idValueOne] = valueTwo;
}

function merge(arrOne, arrTwo) {
  arrOne.push(...arrTwo);
  let rightPointer = arrOne.length - 1;

  for (let i = 0; i < arrOne.length; i++) {
    console.log(arrOne[i]);
  }

  return arrOne;
}

console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8]));
