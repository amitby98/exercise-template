function leapYearRange(stYear, endYear) {
  let yearRange = [];
  for (let i = stYear; i <= endYear; i++) {
    if (i % 4 === 0) {
      yearRange.push(i);
    }
  }
  return yearRange;
}

console.log(leapYearRange(1980, 2020));
