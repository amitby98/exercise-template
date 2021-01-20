function first(array, n) {
  array2 = [];
  if (n === 0 || n === undefined) {
    return array[0];
  }
  for (let i = 0; i < n; i++) {
    array2.push(array[i]);
  }
  return array2;
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
