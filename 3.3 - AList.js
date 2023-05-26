function createListElement(value, rest) {
  return {
    value: value,
    rest: rest
  };
}

function arrayToList(arr) {
  let tempObject = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    tempObject = createListElement(arr[i], tempObject);
  }

  return tempObject;
}

function listToArray() {

}

function prepend() {

}

function nth() {

}

function nthRecursive() {

}

let testArray = [1, 2, 3];

console.log(arrayToList(testArray));