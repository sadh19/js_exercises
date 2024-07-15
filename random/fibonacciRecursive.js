function fibonacciRecursive(steps) {
  if (steps < 1) {
    return 0;
  }

  if (steps === 1 || steps === 2) {
    return 1;
  }

  return fibonacciRecursive(steps - 2) + fibonacciRecursive(steps - 1);
}

console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));
console.log(fibonacciRecursive(7));
