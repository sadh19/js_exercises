function* generateValues() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;

  while (true) {
    yield 6;
  }
}

const generator = generateValues();

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
