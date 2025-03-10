//* Escribe una función factorial que multiplique los valores del número dado hasta 1 (Si es 3, sería 3 * 2 * 1)

function factorial(numb) {
  //* 1.- Validamos nuestro caso base
  if (numb === 1) {
    return numb;
  }

  //*2.- Cambias el valor original de la entrada
  return numb * factorial(numb - 1);
}

console.log(factorial(4));
