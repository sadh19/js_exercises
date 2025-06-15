//? Es una algoritmo de ordenamiento especial que funciona en una lista de numeros
//! Nunca hace comparaciones entre elementos (mayor que/menor que, etc) / Solo funciona para enteros
//? Explota el hecho de que la información sobre el tamaño de un número está codificada en el número de dígitos (más dígitos significa un número mas grande)

//! Creamos una función helper que dado un número y una posición, retornar el dígito que se encuentra en esa posición (de derecha a izq)
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//! Creamos una función helper que retorne la cantidad de dígitos que contiene un número
function getDigitsNumber(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//! Creamos una función helper que tome un arreglo de números enteros y retorne la longitud del número mayor
function mostDigits(arr) {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, getDigitsNumber(arr[i]));
  }

  return maxDigits;
}

function radixSort(arr) {
  const largestDigit = mostDigits(arr);

  for (i = 0; i < largestDigit; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      buckets[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([123456, 1234, 123, 12, 1]));
