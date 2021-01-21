function removeItems(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    // if (num > 0 || num < 0 || (typeof num === "string" && num != "")) {
    if (num) {
      str += num + ",";
    }
  }
  return str;
}

console.log(removeItems([NaN, 0, 15, false, -22, "", undefined, 47, null]));
