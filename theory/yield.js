function* returnSomething() {
  const arr = [1, 2, 3, 4, 5];

  for (let i = 0; i < arr.length; i++) {
    yield [arr[i]];
  }
}

const returnSome = returnSomething();

console.log(returnSome.next());
console.log(returnSome.next());
console.log(returnSome.next());
console.log(returnSome.next());
console.log(returnSome.next());
console.log(returnSome.next());
