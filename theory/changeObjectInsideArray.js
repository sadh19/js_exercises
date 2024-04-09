let personOne = { firstName: "John", age: 50 };
let personTwo = { firstName: "Saul", age: 30 };

let arr = [personOne, personTwo];

console.log(arr);
arr[0]["firstName"] = "Juan";
arr[0]["age"] = 25;

console.log(arr);

arr[1] = { firstName: "Alberto", age: 29 };

console.log(arr);
