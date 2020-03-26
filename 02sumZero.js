function sumZero(arr) {
  const result = [];

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sumOfNumbers = arr[left] + arr[right];
    if (sumOfNumbers === 0) {
      result.push([arr[left], arr[right]]);
      left += 1;
      right -= 1;
    } else if (sumOfNumbers < 0) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return result;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-3, -2, 0, 2, 3]));
console.log(sumZero([-3, -2, 0]));
console.log(sumZero([]));
console.log(sumZero([0]));