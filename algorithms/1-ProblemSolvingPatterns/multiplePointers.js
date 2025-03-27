//? Crea punteros que correspondan a un índice o posición, y se mueve hacia el inicio, final o mitad de un arreglo, basado en ciertas condiciones.

//* Escribe una función sumZero que acepte un array ordenado de números.La función debe retornar el primer par de números que sumados den cero.
//! Si no encuentra el par que sumados den cero, debe retornar undefined.

function sumZero(arr) {
  //* 1.- Validamos el caso base
  if (arr.length < 2) {
    return undefined;
  }

  //* 2.- Se crean los punteros y se crea un bucle donde se valida la suma de los valores donde se encuentres los punteros actuales.
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    //! Aquí se hace la suma de los valores actuales del array, en los punteros
    const sum = arr[leftIndex] + arr[rightIndex];

    if (sum > 0) {
      rightIndex--;
    } else if (sum < 0) {
      leftIndex++;
    } else {
      return [arr[leftIndex], arr[rightIndex]];
    }
  }

  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //? [-3,3]
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10])); //? undefined

//* Valores únicos
//* Crea una función countUniqueValues, que acepte un array ordenado y cuente los valores unicos en el array.
//! Puede haber valores negativos, pero siempre estará ordenado

function countUniqueValues(arr) {
  if (arr.length < 1) {
    return 0;
  }

  let firstPointer = 0;
  let secondPointer = 1;
  let unique = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[secondPointer] !== arr[firstPointer]) {
      unique++;
      firstPointer = secondPointer;
      secondPointer++;
    } else {
      secondPointer++;
    }
  }

  return unique;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])); //? 2
console.log(countUniqueValues([])); //? 0
console.log(countUniqueValues([-1, -1, -1, 0, 1, 2])); //? 4
