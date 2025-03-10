//* Escribe una función collectOddValues que recopile los valores impar de un arreglo dado.
//! Sin hacer uso de la función auxiliadora (pura recursión)

function collectOddValues(arr) {
  let oddValues = [];

  //* 1.- Validamos nuestro caso base
  if (arr.length < 1) {
    return oddValues;
  }

  if (arr[0] % 2 !== 0) {
    oddValues.push(arr[0]);
  }

  //*2.- Cambias el valor original de la entrada
  oddValues = oddValues.concat(collectOddValues(arr.slice(1)));

  return oddValues;
}

console.log(
  collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
);
