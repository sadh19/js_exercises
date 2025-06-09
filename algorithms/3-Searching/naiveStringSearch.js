//* Escribe una función que busque una subcadena de texto, dentro de otra, y que retorne el número de coincidencias si las encuentra.
//? Complejidad Worst and average case: O(n^2)

function searchForString(phrase, word) {
  let count = 0;

  for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (phrase[i + j] !== word[j]) break;
      if (j === word.length - 1) count++;
    }
  }

  return count;
}

console.log(searchForString("lorie loled", "lol"));
console.log(searchForString("anita lava la tina", "la"));
