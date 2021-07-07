function range(start, end, step) {
  let numArray = [];
  for (let i = 0; i < Math.floor((end - start) / step); i++) {
    if (Number.isInteger(start) && end && step) {
      numArray[0] = start;
      numArray.push(numArray[i] + step);
    }
  }
  return numArray;
}
