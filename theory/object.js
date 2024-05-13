let person = {
  name: "Saul",
  age: 30,
  isSingle: false,
};

console.log("Original object: ");
console.log(person);

//Object.keys: Enlista el nombre de los atributos de un objeto.
console.log("===Object.keys===");
const keys = Object.keys(person);
console.log(keys);
console.log("===/===");

//Object.values: Enlista los valores de un objeto
console.log("====Object.values==");
const values = Object.values(person);
console.log(values);
console.log("===/===");

//Object.entries: Crea un array de arrays, conteniendo la llave y el valor en cada array.
console.log("====Object.entries==");
const entries = Object.entries(person);
console.log(entries);
console.log("===/===");

//Object.fromEntries: Crea un objeto a partir de un array de arrays con la estructura de Object.entries.
console.log("====Object.fromEntries==");
const fromEntries = Object.fromEntries(entries);
console.log(fromEntries);
console.log("===/===");

//Object key in: Verifica si algun atributo se encuentra presente en un objeto.
console.log("====Object key in==");
const existName = "name" in person;
console.log(existName);
console.log("===/===");

//Object for in: Itera por sobre todos los atributos string de un objeto (no symbol).
console.log("====Object for in==");
for (let element in person) {
  console.log(person[element]);
}
