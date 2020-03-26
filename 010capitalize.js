function capitalize(arr) {
  const str = arr[0][0].toUpperCase() + arr[0].slice(1);
  if (arr.length === 1) return str;
  return [str, capitalize(arr.slice(1))];
}

console.log(capitalize(['asd', 'sdf']));
