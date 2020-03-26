function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    // checking if we did any swaps to optimize it, if the swaps made are 0, then its already done
    let swaps = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaps += 1;
      }
    }
    if (swaps === 0) break;
  }
  return arr;
}

console.log(bubbleSort([1000, 5, 1, 3, 4, 6, 6, 5, 2, 2]));
console.log(bubbleSort([1, 2, 3, 4, 5]));
