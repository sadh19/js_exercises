//? Se puede hacer uso de una función externa que sirva como ayuda extra

//* Escribe una función collectOddValues que recopile los valores impar de un arreglo dado.

//! Función auxiliadora
function verifyOddValues(arr, oddValues) {
  //* 1.- Validamos nuestro caso base
  if (arr.length < 1) {
    return;
  }

  if (arr[0] % 2 !== 0) {
    oddValues.push(arr[0]);
  }

  //*2.- Cambias el valor original de la entrada
  verifyOddValues(arr.slice(1), oddValues);
}

function collectOddValues(arr) {
  let oddValues = [];

  verifyOddValues(arr, oddValues);

  return oddValues;
}

console.log(
  collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
);
