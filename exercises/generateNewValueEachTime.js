function* generateValue() {
  yield 0;
  let initialValue = 0;
  while (true) {
    let result = initialValue + 1;
    yield result;
    initialValue = initialValue + 1;
  }
}

const generator = generateValue();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
