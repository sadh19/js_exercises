const animalOne = {
  name: "Chiquita",
  age: 5,
  isMale: false,
  owner: {
    fullName: "Saul Dorantes",
    age: 31,
  },
};

const animalTwo = {
  name: "Terry",
  age: 5,
  isMale: true,
  owner: {
    fullName: "Alondra Escandon",
    age: 28,
  },
};

function displayInfo(place) {
  return `${this.name} is ${this.age} years old, and lives in ${place}`;
}

console.log(displayInfo.call(animalOne, "Coatepec"));
console.log(displayInfo.apply(animalOne, ["Xalapa"]));

const dinamicInfo = displayInfo.bind(animalOne);

console.log(dinamicInfo("Veracruz"));
