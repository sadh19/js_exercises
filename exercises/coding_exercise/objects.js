const animalOne = {
  name: "Chiquita",
  age: 5,
  isMale: false,
  owner: {
    fullName: "Saul Dorantes",
    age: 31,
  },
};

for (let key in animalOne) {
  console.log(animalOne[key]);
}

if ("age" in animalOne) {
  console.log("It is");
}

if ("toString" in animalOne) {
  //Wrong
  console.log("Exists only in this object (wrong)");
}

if (animalOne.hasOwnProperty("owner")) {
  console.log("Exists only in this object (right)");
}
