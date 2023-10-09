//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

//You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
//Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {

  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  if (n === 1) {
    return "*\n";
  }

  let halfValue = (n + 1) / 2;
  let diamondsNumber = 1;
  let diamond = '';
  let blankSpaces = halfValue - 1;



  for (let i = 1; i <= n; i++) {


    if (i < halfValue) {
      diamond = diamond.concat(" ".repeat(blankSpaces)).concat("*".repeat(diamondsNumber)).concat("\n");
      diamondsNumber = diamondsNumber + 2;
      blankSpaces--;
    } else if (i > halfValue) {
      diamond = diamond.concat(" ".repeat(blankSpaces)).concat("*".repeat(diamondsNumber)).concat("\n");
      diamondsNumber = diamondsNumber - 2;
      blankSpaces++;
    } else {
      diamond = diamond.concat("*".repeat(n)).concat("\n");
      diamondsNumber = diamondsNumber - 2;
      blankSpaces = 1;
    }

  }

  return diamond;
}



console.log(diamond(1));
console.log(diamond(2));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(7));
console.log(diamond(9));

