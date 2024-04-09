let person = {
  name: "Saul",
  age: 24,
};

let place = {
  name: "Malecon",
  age: 52,
};

function showData(mood) {
  return `${this.name} está ${mood}, y eso que tiene ${this.age} años`;
}

//Call es usado para pasar un objeto cuyo contexto toma la misma función, y poder pasarle el resto de parametros a la misma
console.log(showData.call(person, "feliz"));

//Apply es usado para pasar un objeto cuyo contexto toma la misma función, y poder pasarle el resto de parametros a la misma, pero como un arreglo
console.log(showData.apply(place, ["triste"]));

//Bind es usado para pasar un objeto cuyo contexto toma la misma función, y poder reutlizar la funcion usando el mismo contexto, pero con diferentes parametros
const personaTemerosa = showData.bind(person);
const personaEnojada = showData.bind(person);
console.log(personaTemerosa("temeroso"));
console.log(personaEnojada("enojada"));
