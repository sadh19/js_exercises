//* Escribe una función sumRange que sume los valores del número dado hasta 1 (Si es 3, sería 3 + 2 + 1)

function sumRange(numb) {
  //* 1.- Validamos nuestro caso base
  if (numb === 1) {
    return 1;
  }
  //*2.- Cambias el valor original de la entrada
  return numb + sumRange(numb - 1);
}

console.log(sumRange(5));
