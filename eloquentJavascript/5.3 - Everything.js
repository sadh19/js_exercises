function everyWithLoop(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      return false;
    }
  }

  return true;
}

function everyWithSome(arr, predicate) {
  return arr.some((element) => predicate(element));
}

function isNumberBiggerThan(bigger) {
  return function (value) {
    return value > bigger;
  };
}

const biggerThanFive = isNumberBiggerThan(5);
const biggerThanTen = isNumberBiggerThan(10);

console.log(everyWithLoop([6, 7, 8, 9, 10], biggerThanFive));
console.log(everyWithLoop([9, 20, 30], biggerThanTen));

console.log(everyWithSome([6, 7, 8, 9, 10], biggerThanFive));
console.log(everyWithSome([9, 8, 3], biggerThanTen));
