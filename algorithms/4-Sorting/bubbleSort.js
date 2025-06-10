//? Algoritmo de ordenamiento donde los valores mas grandes "bubbles up" a la cima
//? Se comparan el primer valor del arreglo con el 2do, si el 2do es menor, se cambian de posición, y ahora se compara el mismo valor (el mayor) con el 3er valor del arreglo, y así sucesivamente.
//? Complejidad Worst and average case: O(n^2)

//! Creamos una función swap que cambie dos valores de un arreglo, usando sus índices.
function swap(arr, idOne, idTwo) {
  const firstValue = arr[idOne];
  arr[idOne] = arr[idTwo];
  arr[idTwo] = firstValue;
}

function bubbleSort(arr) {
  //* 1.- Se recorre el arreglo desde el fin hasta el inicio
  for (let i = arr.length; i > -1; i--) {
    //* 1.1.- Se crea una variable para identificar si en el segundo recorrido no hubo necesidad de hacer cambios
    let noSwaps = true;
    //* 2.- Se crea un segundo recorrido desde el inicio hasta el valor de i - 1
    for (let j = 0; j < i - 1; j++) {
      //* 3.- Se comparan los valores de j y j + 1, y si el valor del indíce en j es mayor, se hace el cambio, y así hasta llegar al final del arreglo (segundo recorrido)
      if (arr[j] > arr[j + 1]) {
        //* 3.1.- Si si hubo cambios, se actualiza el valor de noSwaps
        noSwaps = false;
        swap(arr, j, j + 1);
      }
    }

    //* 3.2.- Si no hubo cambios, se finaliza el ciclo del 2do recorrido
    if (noSwaps) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 6, 1, 10, 12, 2, 1]));
console.log(bubbleSort([3, 19, 2, 8, 81, 25, 12]));
console.log(bubbleSort([3, 19, 2]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
