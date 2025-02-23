function isEven(itemNumber) {

  if (itemNumber < 0) {
    return isEven(itemNumber + 2)
  }

  if (itemNumber === 1) {
    return false;
  }

  if (itemNumber === 0) {
    return true;
  }

  return isEven(itemNumber - 2)

}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(1));