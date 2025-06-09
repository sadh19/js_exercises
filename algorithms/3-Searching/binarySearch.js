//? Solo funciona con arreglos ordenados, usa divide and conquer
//? Complejidad Worst and average case: O(log n) Best case: O(1)

//* Escribe una función que reciba un array y un elemento a buscar.
//! Debe retornar el índice del elemento a buscar o -1 en el caso de que no lo encuentre

function binarySearch(arr, value) {
  //* 1.- Creas dos punteros para los extremos del arreglo
  let left = 0;
  let rigth = arr.length - 1;

  //* 2.- Sigues iterando mientras el puntero izq sea menor que el puntero derecho
  while (left < rigth) {
    //* 3.- Sacas el valor de la mitad redondeando hacia arriba
    const middle = Math.round((left + rigth) / 2);

    //* 4.- Si el valor de la mitad es mayor al valor buscado, se recorre el puntero derecho al valor de la mitad.
    if (arr[middle] > value) {
      rigth = middle;
      //* 5.- Si el valor de la mitad es menor al valor buscado, se recorre el puntero izq al valor de la mitad.
    } else if (arr[middle] < value) {
      left = middle;
    } else {
      //* 6.- Si el valor de la mitad coincide con el valor buscado, se retorna el índice del valor de la mitad
      return middle;
    }
  }

  //* 7.- Si no se encuentra el valor, se retorna -1
  return -1;
}

console.log(binarySearch([1, 2, 4, 5, 8, 9, 10, 12], 5)); //! 3
console.log(binarySearch([1, 2, 4, 5, 8, 9, 10, 12], 12)); //! 7
console.log(binarySearch([1, 2, 4, 5, 8, 9, 10, 12], 13)); //! -1
console.log(binarySearch([1, 1, 2, 2, 2, 4, 5, 8, 9, 10, 12, 22], 8)); //! 7
