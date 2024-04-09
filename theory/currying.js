//Function expression
const sum = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

console.log(sum(3, 4));

//Same function, but using currying and closure
const summarize = function (firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
};

const addTwo = summarize(2);
const addThree = summarize(3);

console.log(addTwo(5));
console.log(addThree(12));

const addFour = summarize(8)(9);
console.log(addFour);

const multiplier = (multp) => (numb) => multp * numb;

let multpDouble = multiplier(2);

console.log(multpDouble(25));
