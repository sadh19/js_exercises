//Make flat an array of arrays using reduce and concat
function flat(arr) {
  let responseArr = [];

  responseArr = arr.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    responseArr
  );

  return responseArr;
}

console.log(
  flat([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(flat([[], [2, 54, 41, 1], [4], [12, 5643, 9]]));
