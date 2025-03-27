//? Usa objetos o sets para recopilar valores/frecuencias de valores.

//*Escribe una funcion some, que acepte 2 arrays.La funcion debe retornar verdadero si cada valor en el 1er array tiene su respectivo valor al cuadrado en el 2do.
//! La frecuencia de los valores debe ser la misma.

function same(firstArr, secondArr) {
  //* 1.- Se valida que la longitud de los array sean la misma de base
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  //* 2.- Se crean los objetos que lleven el conteo de los valores de los arrays.
  //* Si se repiten valores, se agrupan en la misma llave

  let frecuencyCounterOne = {};
  let frecuencyCounterTwo = {};

  //! Atención a como se asigna un valor a un objeto si es que la llave es undefined
  for (let val of firstArr) {
    frecuencyCounterOne[val] = (frecuencyCounterOne[val] ?? 0) + 1;
  }

  for (let val of secondArr) {
    frecuencyCounterTwo[val] = (frecuencyCounterTwo[val] ?? 0) + 1;
  }

  //* 3.- Se recorren los valores del primer objeto, buscando la llave al cuadrado en el 2do objeto, y que las frecuencias sean las mismas.

  for (let key in frecuencyCounterOne) {
    if (!(key ** 2 in frecuencyCounterTwo)) {
      return false;
    }

    if (frecuencyCounterOne[key] !== frecuencyCounterTwo[key ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 2, 3], [4, 1, 9, 4])); //? true
console.log(same([1, 2, 3], [1, 9])); //? false
console.log(same([1, 2, 1], [4, 4, 1])); //? false

//* Anagrama
//* Dados dos strings, verifica si el segundo string es un anagrama del primero, e.g. (cinema,iceman)

function isAnagram(firstWord, secondWord) {
  let frecuencyCounterOne = {};
  let frecuencyCounterTwo = {};

  for (let letter of firstWord) {
    frecuencyCounterOne[letter] = (frecuencyCounterOne[letter] ?? 0) + 1;
  }

  for (let letter of secondWord) {
    frecuencyCounterTwo[letter] = (frecuencyCounterTwo[letter] ?? 0) + 1;
  }

  for (let value in frecuencyCounterOne) {
    if (frecuencyCounterOne[value] !== frecuencyCounterTwo[value]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("", "")); //? true
console.log(isAnagram("aaz", "zza")); //? false
console.log(isAnagram("anagram", "nagaram")); //? true
console.log(isAnagram("cinema", "iceman")); //? true
console.log(isAnagram("awesome", "awesom")); //? false
