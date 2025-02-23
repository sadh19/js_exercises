const arr = [1, 3, 5, 6, 1, 2, 3, 9, 10];

let set = new Set(arr);

console.log(set);
console.log(Array.from(set).sort((a, b) => a - b));
