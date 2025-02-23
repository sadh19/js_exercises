for (let beginValue = 1; beginValue <= 100; beginValue++) {
  if (!(beginValue % 3) && !(beginValue % 5)) {
    console.log("FizzBuzz");
  }

  if (!(beginValue % 3) && beginValue % 5) {
    console.log("Fizz");
    continue;
  }

  if (!(beginValue % 5) && beginValue % 3) {
    console.log("Buzz");
    continue;
  }

  console.log(beginValue);
}
