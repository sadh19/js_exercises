//? Algoritmo de ordenamiento que combina la idea de "merge" y "sort"
//? Explota el hecho de que arreglos de 0 o 1 elementos ya están ordenados
//? Descompone el arreglo original en pequeños arreglos de 1 o 0 elementos, y luego recrea un nuevo arreglo ordenado

//! Creamos una función swap que cambie dos valores de un arreglo, usando sus índices.
function swap(arr, idOne, idTwo) {
  const firstValue = arr[idOne];
  arr[idOne] = arr[idTwo];
  arr[idTwo] = firstValue;
}

//! Creamos una función que fusione dos arreglos ordenados
function merge(arrOne, arrTwo) {
  //* 1.- Creamos un arreglo vacío que será el resultado del merge
  let result = [];
  //* 2.- Creamos 2 punteros para la posición del elemento actual en cada arreglo
  let firstArrPointer = 0;
  let secondArrPointer = 0;

  //* 3.- Se crea un bucle que corra siempre y cuando los punteros aun no rebasen la longitud del arreglo
  while (firstArrPointer < arrOne.length || secondArrPointer < arrTwo.length) {
    //* 4.- Se valida que haya elementos en los 2 arreglos
    if (firstArrPointer < arrOne.length && secondArrPointer < arrTwo.length) {
      //* 5.- Si el valor actual del primer arreglo es menor o igual al valor actual del 2do, se copia al result
      if (arrOne[firstArrPointer] <= arrTwo[secondArrPointer]) {
        result.push(arrOne[firstArrPointer]);
        firstArrPointer++;
      } else {
        //* 6.- Sino, se copia el valor del 2do arreglo
        result.push(arrTwo[secondArrPointer]);
        secondArrPointer++;
      }
    } else if (firstArrPointer >= arrOne.length) {
      //* 7.- Si ya no hay elementos en el primer arreglo, se copian el resto de los elementos del segundo en el result
      result = [...result, ...arrTwo.slice(secondArrPointer)];
      secondArrPointer = arrTwo.length;
    } else {
      //* 8.- Si ya no hay elementos en el 2do arreglo, se copian el resto de los elementos del primero en el result
      result = [...result, ...arrOne.slice(firstArrPointer)];
      firstArrPointer = arrOne.length;
    }
  }

  return result;
}

function mergeSort(arr) {
  //* 1.- Como se usa recursividad, se escribe el caso base con arreglos de un solo elemento (se da a entender que con un solo elemento, el arreglo está ordenado)
  if (arr.length <= 1) return arr;
  //* 2.- Se busca la mitad del arreglo
  const middle = Math.floor(arr.length / 2);
  //* 3.- Se vuelve a llamar recursivamente a mergeSort, utilizando la parte izq del arreglo, hasta que regrese un arreglo de un solo elemento
  const leftSide = mergeSort(arr.slice(0, middle));
  const rightSide = mergeSort(arr.slice(middle));
  //* 4.- Al final, se fusionan las partes derecha e izq que recursivamente se fueron dividiendo.
  return merge(leftSide, rightSide);
}

console.log(mergeSort([5, 6, 1, 10, 12, 2, 1]));
console.log(mergeSort([3, 19, 2, 8, 81, 25, 12]));
console.log(mergeSort([3, 19, 2]));
console.log(mergeSort([8, 1, 2, 3, 4, 5, 6, 7]));
