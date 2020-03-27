function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  return Math.max(...arr.map(el => digitCount(el)));
}

function radixSort(nums) {
  const numberOfBuckets = mostDigits(nums);
  for (let k = 0; k < numberOfBuckets; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const bucketNumber = getDigit(nums[i], k);
      digitBuckets[bucketNumber].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
