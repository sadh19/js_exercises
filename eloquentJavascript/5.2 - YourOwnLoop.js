function loop(value, test, update, body) {
  let currentValue = 0;

  while (test(value, currentValue)) {
    body(currentValue);
    currentValue = update(currentValue);
  }
}

function test(value, currentValue) {
  return value > currentValue;
}

function body(currentValue) {
  console.log(currentValue);
}

function update(currentValue) {
  return currentValue + 1;
}

loop(10, test, update, body);
