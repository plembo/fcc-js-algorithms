const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // arr = arr.filter(function (i) { return Number.isInteger(i); });
  // const squaredIntegers = arr.map(function (a) {return a*a; });
  arr = arr.filter((i) => {
     return Number.isInteger(i);
  });
  const squaredIntegers = arr.map((a) => {
     return a*a;
  });
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

