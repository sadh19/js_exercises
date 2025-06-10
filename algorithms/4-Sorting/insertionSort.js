//? Algoritmo de ordenamiento donde se "inserta" un elemento seleccionado dentro de un sub arreglo ordenado.
//? Se crea un arreglo de un elemento al inicio, y se va moviendo cada elemento después de este dentro de este arreglo ordenado, de acuerdo a su valor.
//? Complejidad Worst and average case: O(n^2)

//! Creamos una función swap que cambie dos valores de un arreglo, usando sus índices.
function swap(arr, idOne, idTwo) {
  const firstValue = arr[idOne];
  arr[idOne] = arr[idTwo];
  arr[idTwo] = firstValue;
}

function insertionSort(arr) {
  //* 1.- Se recorre el arreglo desde el 2do elemento hasta el fin (el primer elemento es el subarreglo ordenado)
  for (let i = 1; i < arr.length; i++) {
    //* 2.- Se hace un 2do recorrido desde el último elemento del subarreglo hasta el inicio del mismo
    for (let j = i - 1; j > -1 && arr[j] > arr[j + 1]; j--) {
      //* 3.- Se compara el
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j);
      }
    }
  }

  return arr;
}

console.log(insertionSort([5, 6, 1, 10, 12, 2, 1]));
console.log(insertionSort([3, 19, 2, 8, 81, 25, 12]));
console.log(insertionSort([3, 19, 2]));
console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));
