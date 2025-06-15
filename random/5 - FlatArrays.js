//? Flattea un arreglo de arreglos anidados de números, para que al final retornes un arreglo de un solo nivel

function flat(arr) {
  let result = [];

  return [].concat(...arr);
}

console.log(
  flat(
    // [1, 2, 3],
    // [
    //   [4, 5],
    //   [6, 7],
    // ]
    [8, [9, [10, 11, 12]]]
  )
);
