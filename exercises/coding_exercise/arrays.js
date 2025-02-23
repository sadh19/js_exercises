let arr = [
  {
    name: "Saul",
    age: 31,
    isMale: true,
    mate: { name: "Alondra", lastName: "Escandon" },
  },
  {
    name: "Alondra",
    age: 28,
    isMale: false,
    mate: { name: "Saul", lastName: "Dorantes" },
  },
];

const subArr = arr.splice(1, 1);

console.log(arr);
console.log("===");
console.log(subArr);
