let animal = {
  name: "chiquita",
  isAlive: true,
  age: 5,
};

// Object.freeze(animal);
// Object.seal(animal);

animal["age"] = 10;
animal["race"] = "Chihuahua";

delete animal.name;

console.log(Object.keys(animal));
console.log(Object.values(animal));
console.log(Object.entries(animal));
console.log("name" in animal);
console.log("race" in animal);
console.log("age" in animal);

const persona = {
  firstName: "Saúl Alberto",
  lastName: "Dorantes Hermida",
  bestFriend: { firstName: "Isaac", lastName: "Cabeza de Vaca" },
  bestYears: [1993, 2001, 2006, 2009],
};

console.log(persona);
