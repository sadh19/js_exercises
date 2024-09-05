//Bind es usado para pasar un objeto cuyo contexto toma la misma función, y poder reutlizar la funcion usando el mismo contexto, pero con diferentes parametros

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

const televisaWorker = displayPersonInformationWithWorkplace.bind(person);
const texasWorker = displayPersonInformationWithWorkplace.bind(personTwo);

console.log(televisaWorker("Televisa"));
console.log(texasWorker("Texas"));
