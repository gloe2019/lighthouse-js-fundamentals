const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
};
console.log(whichSchool(35));
console.log(whichSchool(8));
console.log(whichSchool(14));

function test() {
  let x = 123;
  return x;
}
console.log(test());
