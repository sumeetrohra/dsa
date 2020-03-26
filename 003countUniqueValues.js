function countUniqueValues(arr) {
  const length = arr.length;
  if (length === 0) return 0;

  let left = 0;
  let right = 1;

  while (right < length) {
    if (arr[left] === arr[right]) {
      right += 1;
    } else {
      left += 1;
      arr[left] = arr[right];
      right += 1;
    }
  }
  return left + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 7])); // 7
console.log(countUniqueValues([-1, -1, -1, 0])); // 2
console.log(countUniqueValues([-1, 0, 1])); // 3