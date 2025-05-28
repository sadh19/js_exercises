function fibonacci(step) {
  if (step < 1) {
    return 0;
  }

  if (step === 1 || step === 2) {
    return 1;
  }

  return fibonacci(step - 2) + fibonacci(step - 1);
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
