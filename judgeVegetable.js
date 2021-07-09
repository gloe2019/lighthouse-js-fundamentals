//the function below was my first attempt, but i didn't know how to access an pbject's value based on the key/value of another item in the object
//const judgeVegetable = function (vegetables, metric) {
//let metricArray = [];
// for (let i = 0; i < vegetables.length; i++) {
// metricArray.push(vegetables[i][metric]);
// }
//console.log(metricArray);
// let highestRank = vegetables[0][metric];
//  for (let j = 0; j < metricArray; j++) {
//    if (highestRank < metricArray[j]) {
//highestRank = metricArray[j];
//}
//}
//  console.log(highestRank);
//  let highestRankObj =
//};
//
//Second attempt, using the not fully-understood array sort function..
//
const judgeVegetable = function (vegetables, metric) {
  let sortedArray = vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return sortedArray[0].submitter;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

console.log(judgeVegetable(vegetables, metric));
