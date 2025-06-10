//? Algoritmo de ordenamiento parecido al bubble sort, pero en lugar de mandar los valores mas grandes al final
//? En cada iteración busca el valor mas pequeño, y lo manda al "arreglo ordenado"

//! Creamos una función swap que cambie dos valores de un arreglo, usando sus índices.
function swap(arr, idOne, idTwo) {
  const firstValue = arr[idOne];
  arr[idOne] = arr[idTwo];
  arr[idTwo] = firstValue;
}

function selectionSort(arr) {
  //* 1.- Se recorre el arreglo desde el fin hasta el inicio
  for (let i = 0; i < arr.length; i++) {
    //* 2.- Se asigna el mínimo como el primer indice del recorrido
    let min = i;
    //* 3.- Se crea el 2do recorrido a partir del indice i + 1
    for (let j = i + 1; j < arr.length; j++) {
      //* 4.- Si se encuentra un valor mas pequeño al por defecto, se actualiza este.
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    //* 5.- Si el valor minimo encontrado es diferente al inicial, se hace el cambio en el arreglo
    if (arr[min] !== arr[i]) {
      swap(arr, min, i);
    }
  }

  return arr;
}

console.log(selectionSort([5, 6, 1, 10, 12, 2, 1]));
console.log(selectionSort([3, 19, 2, 8, 81, 25, 12]));
console.log(selectionSort([3, 19, 2]));
console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
