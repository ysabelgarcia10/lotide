const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function that will take in a collection of items and return counts for  aspecific subset of those items. It won't count everyhting.
//allItems: array of strings we need to look through
//itemsToCount: an object specifying what to count.
const countOnly = function(allItems, itemsToCount) {
  //placeholder for results
  const results = {};
  
  //go through the array
  for (const item of allItems) {
    //if item is a key in the itemsToCount
    if (itemsToCount[item]) { //if "true" in the itemsToCount
      if(results[item]) { //if item is already a key in results, it will add 1
        results[item] += 1;
      } else {
        //else, if the key is not yet in the results object, it will automatically adds this to results with a value default value of 1
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); 
console.log(result1);

assertEqual(result1["Jason"], 1); //results1["Jason"] is saying, what is the value under the key "Jason" from object results1.
assertEqual(result1["Karima"], undefined); //results1 does not have Karima logged.
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);