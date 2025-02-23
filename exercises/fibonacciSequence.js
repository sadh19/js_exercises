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

const generator = fibonacciGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
