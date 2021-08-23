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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

console.log("-------")
const cd = { c: "1", e: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
//end of code
