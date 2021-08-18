//takes two array and return ture or false based on a perfect match
const eqArrays = function(array1, array2) {
  //iterates through the two arrays and identifies if that same element in the two arrays are the same
  for (let i = 0; i < array1.length; i++) {
    //if length of arrays are not equal, the code stops immediately
    if (array1.length !== array2.length) {
      return false;
    }
    //if same element are not equal, code returns false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//evaluates whether two parameters are equal
const assertArraysEqual = function(array1, array2) {
  //are the values and type of the same?
  if (eqArrays(array1, array2)) {
    //if so, it's passed
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}.`);
  } else {
    //else, assertion failed
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 5, 3], [1, 2, 8]); // => should FAIL
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL