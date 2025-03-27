//? Conlleva crear una ventana que puede ser una array o un numero de una posición a otra.
//? Dependiendo del caso, la ventana se puede ampliar o cerrar (dando paso a una nueva)

//* Escribe una función maxSubArraySum que acepte un array de enteros y un número n. La función debe calcular la suma máxima de n elementos consecutivos en el array.
//! Regresa null si no se cumple la condición dada.

function maxSubArraySum(arr, num) {
  //* 1.- Validamos el caso base
  if (arr.length < num) {
    return null;
  }

  //* 2.- Creamos las variables que lleven el control de la suma máxima y la ventana temporal
  let maxSum = 0;
  let tempSum = 0;

  //* 3.- Recorremos el arreglo para obtener el primer maxSum usando el num como límite y recorriendo desde el inicio
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  //* 4.- Asignamos el primer valor temporal a la ventana
  tempSum = maxSum;

  //* 5.- Recorremos la ventana, usando los valores del tempSum, restando el valor del array en la posición actual menos num, y sumandole el valor del array en la posición actual
  //* Al final, comparamos el tempSum vs el maxSum y actualizamos la variable (si es necesario)
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //? 10
console.log(maxSubArraySum([4, 2, 1, 6], 1)); //? 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); //? 13
console.log(maxSubArraySum([], 4)); //? null
