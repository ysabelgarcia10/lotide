const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function to list all unique letters in a sentence and count them.
const countLetters = function(sentence) {
  //remove space in the sentence
  sentence = sentence.replace(/\s/g, '');
  //placeholder result to list all letters found as keys and num of occurences as values of those keys
  let result = {};
  //iterate through the sentence
  for (let letter of sentence) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1
    }
  }
  console.log("result: " , result);
  return result;
}

const expectedObject = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
console.log("expected: ", expectedObject);

const actualObject = countLetters("lighthouse in the house");
console.log(assertEqual(actualObject, expectedObject));