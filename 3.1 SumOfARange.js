function range(start, end, step) {

  let rangeNumbers = [start];

  if (!step) {
    for (let init = start + 1; init <= end; init = init + 1) {
      rangeNumbers.push(init)
    }
  } else {
    if (step > 0) {
      for (let init = start + step; init <= end; init = init + step) {
        rangeNumbers.push(init)
      }
    } else {
      for (let init = start - Math.abs(step); init >= end; init = init - Math.abs(step)) {
        rangeNumbers.push(init)
      }
    }
  }

  return rangeNumbers;

}



function sum(numbers) {

  let counter = 0;

  for (let init = 0; init <= numbers.length - 1; init++) {
    counter = + counter + numbers[init]
  }

  return counter;

}

console.log(range(10, 1, -2))
console.log(sum(range(1, 10)));


