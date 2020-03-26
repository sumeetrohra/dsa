function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}

const isOdd = val => val % 2 === 1;

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([2, 4, 6], isOdd));
console.log(someRecursive([], isOdd));
console.log(someRecursive([1, 2, 4], isOdd));
