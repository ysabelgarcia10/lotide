//takes two array and return ture or false based on a perfect match
const eqArrays = function(array1, array2) {
  //are the arrays equal? let answer be false at default.
  let isEqual = "";
  //iterates through the two arrays and identifies if that same element in the two arrays are the same
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      isEqual = true;
    } else {
      isEqual = false;
    }
  }
  console.log(isEqual);
  return isEqual;
};

//evaluates whether two parameters are equal
const assertEqual = function(actual, expected) {
  //are the values and type of the same?
  if (actual === expected) {
    //if so, it's passed
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    //else, assertion failed
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS