let array = [1, 3, 4, 2, 5, 6, 7, 8, 9, 12, 1, 2];

console.log("Original array: ");
console.log(array);

//Foreach: Recorre todo el arreglo, no retorna nada.(NO muta arreglo original)
console.log("===Foreach===");
array.forEach((element) => element * 2);
console.log("Array: ");
console.log(array);
console.log("===/===");
//Map: Recorres cada valor del array y puedes modificar cada elemento,y retornas un nuevo array. (NO muta arreglo original)
console.log("===Map===");
const arrayMap = array.map((element) => element * 2);
console.log("Array: ");
console.log(array);
console.log("Array map:");
console.log(arrayMap);
console.log("===/===");
//Filter: Recorres el arreglo buscando los elementos que cumplan con la condición dada y retornas un nuevo array.(NO muta arreglo original)
console.log("===Filter===");
const arrayFilter = array.filter((element) => element > 2);
console.log("Array: ");
console.log(array);
console.log("Array filter: ");
console.log(arrayFilter);
console.log("===/===");
//Slice: Crea un subarray de un array, usando los parámetros de inicio y cuantos elementos quieres que se tomen en cuenta (NO muta arreglo original)
console.log("===Slice===");
const arraySlice = array.slice(0, 2);
console.log("Array: ");
console.log(array);
console.log("Array slice: ");
console.log(arraySlice);
console.log("===/===");
//Splice: Crea un subarray de un array, eliminando valores usando los parámetros de la función, y retorna los elementos borrados en un nuevo array. (SI muta arreglo original)
console.log("===Splice===");
const arraySplice = array.splice(0, 3);
console.log("Array: ");
console.log(array);
console.log("Array splice: ");
console.log(arraySplice);
console.log("===/===");
//Find: Busca un elemento en el arreglo usando la condición dada, y lo retorna. Si no lo encuentra, retorna undefined.(NO muta arreglo original)
console.log("===Find===");
const foundElement = array.find((element) => element === 8);
console.log("Array: ");
console.log(array);
console.log("Found element: ");
console.log(foundElement);
console.log("===/===");
//IndexOf: Retorna el indice de la primer incidencia donde se encuentre el elemento dado, el segundo parámetro indica el punto de inicio, si no hay, se toma en cuenta el inicio como el indice 0;si no encuentra incidencias, retorna -1(NO muta arreglo original)
console.log("===IndexOf===");
const foundElementIndex = array.indexOf(8, 1);
console.log("Array: ");
console.log(array);
console.log("Found element index: ");
console.log(foundElementIndex);
console.log("===/===");
//LastIndexOf: Retorna el indice de la última incidencia donde se encuentre el elemento dado, el segundo parámetro indica el punto de inicio, si no hay, se toma en cuenta el inicio como el indice 0;si no encuentra incidencias, retorna -1(NO muta arreglo original)
console.log("===LastIndexOf===");
const foundElementLastIndex = array.lastIndexOf(2);
console.log("Array: ");
console.log(array);
console.log("Found element last index: ");
console.log(foundElementLastIndex);
console.log("===/===");
//Join: Une todos los elementos de un arreglos usando un separador, creando un string de salida(NO muta arreglo original)
console.log("===Join===");
const arrayJoin = array.join("//");
console.log("Array: ");
console.log(array);
console.log("Array join: ");
console.log(arrayJoin);
console.log("===/===");
