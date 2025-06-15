//? Fusiona 2 arreglos ordenados
//! Sin crear un arreglo nuevo

function merge(arrOne, arrTwo) {
  const totalItems = arrOne.length + arrTwo.length;
  let pointerOne = 0;

  while (arrTwo.length > 0) {
    if (arrTwo[0] >= arrOne[pointerOne]) {
      pointerOne++;
    } else {
      arrOne = [
        ...arrOne.slice(0, pointerOne),
        arrTwo.shift(),
        ...arrOne.slice(pointerOne),
      ];

      pointerOne++;
    }
  }

  // console.log(arrTwo);
  return arrOne;
}

console.log(merge([1, 3, 4], [2, 5, 6]));
console.log(merge([1, 4], [2, 6]));
console.log(merge([], [2, 6]));
console.log(merge([1], []));
