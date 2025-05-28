//Dado un arreglo y un target, retorna los indices de los numeros que sumados den el target
// var twoSum = function (nums, target) {
//   let pointerOne = 0;
//   let pointerTwo = 1;

//   while (pointerOne < nums.length - 1) {
//     if (nums[pointerOne] + nums[pointerTwo] === target) {
//       return [pointerOne, pointerTwo];
//     }

//     if (
//       nums[pointerOne] + nums[pointerTwo] !== target &&
//       pointerTwo < nums.length - 1
//     ) {
//       pointerTwo++;
//     } else {
//       pointerTwo = pointerOne + 2;
//       pointerOne++;
//     }
//   }
// };

//Two sum improved
//TODO
var twoSum = function (nums, target) {
  const numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    numsObj[i] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    console.log(complement);

    if (complement in numsObj) {
      return [numsObj[nums[i]], numsObj[complement]];
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
// console.log(twoSum([3, 2, 4], 6)); //[1,2]
// console.log(twoSum([3, 9, 11, 2, 7, 4], 6)); //[1,2]
// console.log(twoSum([2, 9, 11, 2, 7, 4, 9], 18)); //[1,2]
// console.log(twoSum([3, 3], 6)); //[0,1]

console.log(twoSum([2, 9, 11, 2, 7, 4, 9], 18)); //[1,2]
