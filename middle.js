
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

//returns middle values
const middle = function(array) {
  let middleValue = [];
  let middleElement = ""

  //if there are more than two elements and it is odd, there is only 1 middle
  if (array.length > 2 && array.length % 2 !== 0) {
  //use to find the middle of an array
    middleElement = Math.round((array.length - 1) / 2)
    middleValue.push(array[middleElement]);
  } else if (array.length > 2 && array.length % 2 === 0) {
    middleElement = array.length / 2;
    middleValue.push(array[middleElement - 1], array[middleElement])
  }
  console.log(middleValue)
  return middleValue;
}

assertArraysEqual(middle([1]), [ ]) //needs to be fixed
assertArraysEqual(middle([1, 2]), [1, 2 , 3, 4, 5, 6]) // => [] //needs to be fixed
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3, 4, 5, 6, 7, 8]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
