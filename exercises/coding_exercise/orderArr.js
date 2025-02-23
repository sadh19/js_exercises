function orderArr(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(orderArr([1, 10, 2, 54, 2, 75]));
