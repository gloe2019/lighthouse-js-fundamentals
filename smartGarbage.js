const smartGarbage = function (trash, bins) {
  let binKeys = Object.keys(bins);
  for (let i = 0; i < binKeys.length; i++) {
    if (trash === binKeys[i]) {
      bins[trash] += 1;
    }
  }
  return bins;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 3, compost: 5 }));
