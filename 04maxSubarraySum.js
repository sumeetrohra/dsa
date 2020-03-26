function maxSubArraySum(arr, subArrLength) {
  if (arr.length < subArrLength) {
    return null;
  }

  let maxSum = arr.slice(0, subArrLength).reduce((a, b) => a + b, 0);
  let tempSum = maxSum;

  for (let i = subArrLength; i < arr.length; i += 1) {
    tempSum = tempSum - arr[i - subArrLength] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null