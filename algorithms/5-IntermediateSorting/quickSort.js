//? Algoritmo de ordenamiento que funciona seleccionando un elemento (pivote) y encuentra el índice donde el pivote debe terminar en el arreglo ordenado
//? Una vez que el pivote está colocado, el quickSort se puede aplicar a cualquier lado del pivote
//? Como el mergeSort, explota el hecho de que arreglos de 0 o 1 elementos ya están ordenados

//! Creamos una función swap que cambie dos valores de un arreglo, usando sus índices.
function swap(arr, idOne, idTwo) {
  const firstValue = arr[idOne];
  arr[idOne] = arr[idTwo];
  arr[idTwo] = firstValue;
}

//! Creamos una función pivot que selecciona un valor del arreglo, encuentre su índice con base a su valor en comparación con los demás valores, y mueva los menores a su izq, y los mayores a la derecha
//! Le pasamos start y end, por que necesitamos que el sort lo haga inline, sin crear arreglos nuevos
function pivot(arr, start = 0, end = arr.length + 1) {
  //* 1.- Se crea una variable con el valor inicial del arreglo
  let counter = start;
  //* 2.- Se crea una variable con el valor inicial del pivote
  let pivot = arr[start];

  //* 3.- Se recorre el arreglo desde el start hasta el fin del arreglo
  for (let i = start + 1; i < arr.length; i++) {
    //* 4.- Si encuentra un valor menor al pivote, aumenta el valor del counter, y hace swap del valor encontrado, con el nuevo valor del counter.
    if (arr[i] < pivot) {
      counter++;
      swap(arr, i, counter);
    }
  }

  //* 5.- Al finalizar, como ya encontró todos los posibles valores menores al pivote, debe mover el mismo hasta el último valor del counter
  swap(arr, start, counter);

  //* 6.- Al final, debe regresar el valor donde se debe posicionar el pivote
  return counter;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  //* 1.- Como es un sort que debe hacer los cambios in-place, no se puede usar la longitud del arreglo para validaciones, así que se valida que el proceso siga siempre y cuando el valor inicial sea menor que el final
  if (left < right) {
    //* 2.- Se encuentra el valor del pivote, y se sortea el arreglo parcialmente en dos mitades (menor y mayor que el pivote)
    let pivotTemp = pivot(arr, left, right);
    //! left side
    //* 3.- Se llama recursivamente quickSort para que siga diviendo el arreglo hasta llegar a un arreglo de un solo elemento
    quickSort(arr, left, pivotTemp - 1);
    //! rigth side
    quickSort(arr, pivotTemp + 1, right);
  }

  //* 4.- Cuando se vuelve un arreglo de un solo elemento, hace el return
  return arr;
}

console.log(quickSort([5, 6, 1, 10, 12, 2, 1]));
console.log(quickSort([3, 19, 2, 8, 81, 25, 12]));
console.log(quickSort([3, 19, 2]));
console.log(quickSort([8, 1, 2, 3, 4, 5, 6, 7]));
