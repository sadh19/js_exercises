function createListElement(value, rest) {
  return {
    value: value,
    rest: rest
  };
}

function isTheLastListElement(element) {
  return !element;
}

function arrayToList(arr) {
  let tempObject = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    tempObject = createListElement(arr[i], tempObject);
  }

  return tempObject;
}

function listToArray(list) {

  let tempElement = list;
  let arr = [];

  while (!isTheLastListElement(tempElement)) {
    arr = arr.concat(tempElement["value"]);
    tempElement = tempElement["rest"];
  }

  return arr;

}

function prepend(element, list) {
  return { value: element["value"], rest: list };
}

function isTheElementRequired(element, index) {
  return index === element["value"] - 1;
}

function isTheListOutOfElements(element) {
  return !element;
}

function nth(list, index) {
  while (!isTheListOutOfElements(list["rest"]) && !isTheElementRequired(list, index)) {
    list = list["rest"];
  }

  if (isTheElementRequired(list, index)) {
    return list;
  }

  return undefined;

}



let testArray = [1, 2, 3];
let testList = { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: null } } } };


//console.log(arrayToList(testArray));
//console.log(listToArray(testList));
//console.log(prepend({ value: 0 }, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));
//console.log(nth(testList, 0));
