//will help us easily test functions that return objects.

//looks to see if arrays match
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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //see first if the two objects have the same length
  //if the two objects are not the same length, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  
  //if objects are the same length or have the same number of keys
  } else {
    //iterate through all the keys in the first object
    for (const key in object1) {
      //check whether the specified key in object 1 and 2 are both arrays
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //if both keys are arrays, call the eqArrays function to see if both keys' arrays match
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        //sees if they have the same key name, if not return false
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  //if the same number of keys, if both objects have the same name of keys, if the same keys in each object have the same exact value (whether primitive or array), then return true
  return true
};

//function takes two objects and sends an apppropriate message to the console.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    //if so, it's passed
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    //else, assertion failed
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2}, {b: 2, a: '1'}); // => should PASS
assertObjectsEqual({ a: '1', b: 2}, {b: '2', a: '1'}); // => should FAIL
assertObjectsEqual({ a: '1', b: 2}, {b: 2, a: '1', c: 3}); // => should FAIL
assertObjectsEqual({ a: '1', b: [1 , 2, 3]}, {b: [1, 2, 3], a: '1'}); // => should PASS
assertObjectsEqual({ a: '1', b: [1 , 2, 3]}, {b: [1, 2, 4], a: '1'}); // => should FAIL
