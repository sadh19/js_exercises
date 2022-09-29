//Function to swap values
function swapValues(arr, id1, id2) {
  var temp = arr[id1]
  arr[id1] = arr[id2];
  arr[id2] = temp
}

//Bubble sort first implementation (Big O square)
function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swapValues(arr, j, j + 1)
      }
    }
  }


  return arr;
}



console.log(bubbleSort([2, 3, 7, 1, 9, 8]));
