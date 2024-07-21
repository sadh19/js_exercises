// const example = [1, 2, 3, 4, 5];
// const example = "Saul";
const example = new Map();
example.set("name", "Saul");
example.set("edad", 30);
// const example = new Set([1, 2, 2, 3, 4, 5, 5, 5]);

let iterator = example[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
