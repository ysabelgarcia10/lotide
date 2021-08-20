//function that loops through array and as long as it doesn't meet the condition in the callback function, it will keep listing items in a new array.
const takeUntil = function(array, callback) {
  newArray = [];
  for (item in array) { //loop through an array
    if (!callback(array[item])) { //execute the callback function and pass the item to see if it meets the condition in the callback. if it doesn't list the items in a new array
      newArray.push(array[item])
    } else { //once the condition is met from the callback function, stop the code.
      break;
    }
  }
  return newArray;
}

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 4, 6]); // => should FAIL
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']); // => should PASS