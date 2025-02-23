function* fibonacciGenerator() {
  yield 0;
  yield 1;

  let firstValue = 0;
  let secondValue = 1;

  while (true) {
    let result = firstValue + secondValue;
    yield result;
    firstValue = secondValue;
    secondValue = result;
  }
}

const fibonacci = fibonacciGenerator();

console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
