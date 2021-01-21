function sortArr(num) {
  let notSort = true;
  while (notSort) {
    notSort = false;
    for (let i = 0; i < num.length; i++) {
      let numPlace = num[i];
      let placePlus = num[i + 1];
      if (num[i] > num[i + 1]) {
        num[i] = placePlus;
        num[i + 1] = numPlace;
        notSort = true;
        console.log(num);
      }
    }
  }
  return num;
}

console.log(sortArr([-3, 8, 7, 6, 5, -4, 3, 9, 2, 1]));
