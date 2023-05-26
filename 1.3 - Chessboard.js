//8*8 grid
// Si es par, empieza con #
//Si es impar, con espacio en blanco

const gridSize = 8;
const evenCase = " #"
const oddCase = "# "



for (let gridBegin = 1; gridBegin <= gridSize; gridBegin++) {
  if (!(gridBegin % 2)) {
    if (!(gridSize % 2)) {
      console.log("#".concat(evenCase.repeat((gridSize) / 2 - 1).concat(" ")))
    } else {
      console.log("#".concat(evenCase.repeat((gridSize) / 2 - 1)))
    }
  } else {
    if (!(gridSize % 2)) {
      console.log(" ".concat(oddCase.repeat((gridSize) / 2 - 1).concat("#")))
    } else {
      console.log(" ".concat(oddCase.repeat((gridSize) / 2 - 1)))
    }
  }

}


