function isEven(number) {
  return Math.abs(number) % 2 === 0;
}

console.log(isEven(0));
console.log(isEven(2));
console.log(isEven(-2));
console.log(isEven(3));
console.log(isEven(10));
