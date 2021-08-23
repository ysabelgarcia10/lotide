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

//letterPositions will return all the indices in the string where each character is found. For each letter, instead of returning just one number to represent its number of occurences, multiple numbers are needed to represent all the places in the string that it shows up.
const letterPositions = function(sentence) {
  //placeholder result to list all letters found as keys and num of occurences as values of those keys
  let result = {};
  //iterate through the sentence
  for (let i = 0; i < sentence.length; i++) {
    //if the key (the letter) already exists in the object, simply push the new index on the existing array for that key
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
      //if this is the first time the key is being inserted in the object, log the key with a default value of index of where that letter was first found.
    } else {
      result[sentence[i]] = [i];
    }
  }
  //removes the space key and its associated array values.
  delete result[" "];
  console.log("result: " , result);
  return result;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);
//end of code
