let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrTwo = [11, 12, 13, 14, 15];

const sum = arr.reduce((accumulate, current) => {
  return accumulate + current;
}, 0);

console.log(sum);

const sumTwoEveryElement = arr.map((value) => value + 2);

console.log(sumTwoEveryElement);

const filteredPairNumbers = arr.filter((value) => value % 2 === 0);

console.log(filteredPairNumbers);

const firstFiveElements = arr.slice(0, 5);

console.log(firstFiveElements);

const threeFounded = arr.indexOf(9);

console.log(threeFounded);

const thereIsAElementGreaterThanFive = arr.some((value) => value > 5);

console.log(thereIsAElementGreaterThanFive);

const firstElementGreaterThan8 = arr.find((value) => value > 8);

console.log(firstElementGreaterThan8);

const joinElements = arr.join("");

console.log(joinElements);

const sortedArr = arr.sort((a, b) => b - a);

console.log(sortedArr);

const mergedArr = [...arr, ...arrTwo];

console.log(mergedArr);

const secondHalfElements = arr.splice(5);

console.log(secondHalfElements);
