//Call es usado para pasar un objeto cuyo contexto toma la misma función, y poder pasarle el resto de parametros a la misma

let person = {
  name: "Adrian Marcelo",
  age: 36,
};

let personTwo = {
  name: "Marty Robbins",
  age: 55,
};

function displayPersonInformation() {
  return `${this.name} tiene ${this.age} años`;
}

console.log(displayPersonInformation.call(person));
console.log(displayPersonInformation.call(personTwo));
