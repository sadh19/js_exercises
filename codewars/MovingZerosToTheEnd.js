//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let arrayWithoutZeros = arr.filter((value) => value !== 0);
  let arrZeros = arr.filter((value) => value === 0);
  return arrayWithoutZeros.concat(arrZeros);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));