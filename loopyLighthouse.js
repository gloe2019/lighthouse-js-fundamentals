const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0) {
      if (i % multiples[1] === 0) {
        console.log(words.join(""));
      } else {
        console.log(words[0]);
      }
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

//for (let i = 100; i <= 200; i++) {
//  if (i % 3 === 0) {
//    if (i % 4 === 0) {
//      console.log("LoopyLighthouse");
//    } else {
//      console.log("Loopy");
//    }
//  } else if (i % 4 === 0) {
//    console.log("Lighthouse");
//  } else {
//    console.log(i);
//  }
//}
