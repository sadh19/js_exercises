function reverseArray(arr) {

  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;

}

function swapValues(arr, idOne, idTwo) {
  let valueOne = arr[idOne];
  arr[idOne] = arr[idTwo];
  arr[idTwo] = valueOne;
}

function reverseArrayInPlace(arr) {
  let pointerOne = 0;
  let pointerTwo = arr.length - 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (pointerTwo > pointerOne) {
      swapValues(arr, pointerOne, pointerTwo);
      pointerOne++;
      pointerTwo--;
    }
  }

  return arr;

}

let testArray = [1, 2, 4, 5, 3, 10, 2];

console.log(reverseArray(testArray));
console.log(reverseArrayInPlace(testArray));