//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//16  -->  1 + 6 = 7
//942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6


function digitalRoot(n) {

  const arrNumbers = n.toString().split("");

  if (arrNumbers.length === 1) {
    return Number(arrNumbers[0]);
  }

  const newNumber = arrNumbers.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));

  return digitalRoot(newNumber);

}


console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
