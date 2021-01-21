function dashes(str) {
  console.log(str);
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const digit = Number(str[i]);
    const digit1 = Number(str[i + 1]);
    if (digit % 2 === 0 && digit1 % 2 === 0) {
      res += char + "-";
    } else {
      res += char;
    }
    console.log(char);
  }
  return res;
}
console.log(dashes("052684352"));
