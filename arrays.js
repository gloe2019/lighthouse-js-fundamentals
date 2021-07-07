// Array Basics

const director = "Steven Spielberg";
// arrays are special Js objects designed for storing lists of values.
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];
// array items have an associated index, beginning from 0.
console.log(`My favorite ${director} film is ${films[2]}`);
// if we try to access a value at an index outside the range of our array, JavaScript returns 'undefined'.
// Arrays can store any kind of value or combination of values.
//
// Array Operations
films[2] = "Jurassic Park"; // replacing the third item in the array
films.push("A.I."); // adding A.I. to the end of the array.

//We can check how many items an array is holding using the length property
