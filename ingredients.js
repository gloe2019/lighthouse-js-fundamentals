const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the content of ingredients

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

//Write a for loop that prints out the contents of ingredients

for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

//Write out any loop (for or while that prints out the contents of ingredients backwards)

for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
