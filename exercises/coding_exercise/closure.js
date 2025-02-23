function multiply(firstNumber) {
  return (secondNumber) => {
    return firstNumber * secondNumber;
  };
}

const multiplyByTwo = multiply(2);
const multiplyByFive = multiply(5);

console.log(multiplyByTwo(12));
console.log(multiplyByFive(3));
