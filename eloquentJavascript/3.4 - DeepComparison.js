function isAValidValueComparison(value1, value2) {
  return (typeof value1 === typeof value2) && (typeof value1 !== 'object' && typeof value2 !== 'object');
}

function isAValidObjectComparison(value1, value2) {
  return value1 && value2 && (typeof value1 === 'object' && typeof value2 === 'object');
}

function isAValidComparison(value1, value2) {
  return typeof value1 === typeof value2;
}

function isValuesEqual(value1, value2) {
  return value1 === value2;
}

function checkIfKeyExists(key, object) {
  return key in object;
}


function deepEqual(value1, value2) {

  if (isAValidComparison(value1, value2)) {

    if (isAValidValueComparison(value1, value2)) {
      return isValuesEqual(value1, value2);
    }

    if (isAValidObjectComparison(value1, value2)) {

      let keysObjOne = Object.keys(value1);
      let isObjectsEqual = true;

      return keysObjOne.every(elm => checkIfKeyExists(elm, value2));






      return isObjectsEqual;

    }

  }


  return false;





}

console.log(deepEqual({ "name": "Saul" }, { "names": "Alberto" }))



