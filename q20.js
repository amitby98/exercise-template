function getDuplicates(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let checkingNow = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (checkingNow === arr[j] && i !== j) {
        if (duplicates.findIndex((x) => x === checkingNow) === -1) {
          duplicates.push(checkingNow);
        }
        break;
      }
    }
  }
  return duplicates;
}
console.log(getDuplicates([1, 2, 3, 4, 2, 1]));
