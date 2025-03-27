//? Conlleva dividir un dataset en piezas pequeñas y repetir un proceso con un subconjunto de datos.

//* Escribe una función search que dado un array de enteros ordenado y un valor a buscar dentro del mismo, regrese el índice del valor buscado.
//! Si el valor no existe, regresar un -1

function search(arr, value) {
  //* 1.- Inicializamos el índice minímo  y máximo
  let idMin = 0;
  let idMax = arr.length - 1;

  //* 2.- Creamos un bucle que corra siempre y cuando el idMin no sobrepase al idMax
  while (idMin <= idMax) {
    //* 3.- Encontramos el id de la mitad y el valor en este id
    let idMiddle = Math.floor((idMin + idMax) / 2);
    let currentElement = arr[idMiddle];

    //* 4.- Si el valor de la mitad es mayor que el valor buscado, significa que nos pasamos y podemos dejar de tomar en cuenta la 2da mitad del arreglo
    if (currentElement > value) {
      idMax = idMiddle - 1;
      //* 5.- Si el valor de la mitad es menor que el valor buscado, significa que nos faltó y podemos dejar de tomar en cuenta la 1era mitad del arreglo
    } else if (currentElement < value) {
      idMin = idMiddle + 1;
    } else {
      //* 6.- Si es el valor buscado, retornamos su id
      return idMiddle;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); //? 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); //? 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); //? -1
