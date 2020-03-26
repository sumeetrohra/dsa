function binarySearch(arr, elem) {
  let start = 0,
    end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end && arr[mid] !== elem) {
    if (elem < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === elem ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 90));
