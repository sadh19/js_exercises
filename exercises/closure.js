function summarize(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

const summarizeTwo = summarize(2);

console.log(summarizeTwo(5));
console.log(summarize(5)(8));
