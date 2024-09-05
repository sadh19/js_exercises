//Apply es usado para pasar un objeto cuyo contexto toma la misma función, y poder pasarle el resto de parametros a la misma, pero como un arreglo

let person = {
  name: "Adrian Marcelo",
  age: 36,
};

let personTwo = {
  name: "Marty Robbins",
  age: 55,
};

function displayPersonInformationWithWorkplace(workplace) {
  return `${this.name} tiene ${this.age} años, y trabaja en ${workplace}`;
}

console.log(displayPersonInformationWithWorkplace.apply(person, ["Televisa"]));
console.log(displayPersonInformationWithWorkplace.apply(personTwo, ["Texas"]));

function displayPersonInformation() {
  return `${this.name} tiene ${this.age} años`;
}

console.log(displayPersonInformation.apply(person, []));
console.log(displayPersonInformation.apply(personTwo, []));
