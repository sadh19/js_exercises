//0112358...
function fibonacci(step) {
  //Caso base donde la primera iteracion es 0
  if (step < 1) {
    return 0;
  }

  //Casos donde la serie regresa 1
  if (step === 1 || step === 2) {
    return 1;
  }

  return fibonacci(step - 2) + fibonacci(step - 1);
}

// console.log(fibonacci(10));

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
