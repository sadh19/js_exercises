//? La recursividad consta de 2 elementos principales:
//? - El caso base y diferentes entradas.

//* Escribe una función countdown que imprime el valor decreciente de un número, hasta que llegue a 0.

function countdown(numb) {
  //* 1.- Validamos nuestro caso base
  if (numb < 1) {
    console.log("Llegaste a 0")
    return
  }
  console.log(numb);
  //*2.- Cambias el valor original de la entrada
  numb--;
  return countdown(numb);
}

countdown(10);
