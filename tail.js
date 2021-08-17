//returns an array of the tails only from the listed items "actual"
let resultList = [];
const tail = function(listItems) {
  for (let i = 1; i < listItems.length; i++) {
    resultList.push(listItems[i]);
  }
  return resultList;
};

//goes through the array from both the actual and expected and compares on the same index number
const assertEqual = function(resultList, expected) {
  for (let i = 0; i < resultList.length; i++) {
    if (resultList[i] === expected[i]) {
      console.log(`✅✅✅ Assertion Passed: ${resultList[i]} === ${expected[i]}.`);
    } else {
      console.log(`❌❌❌ Assertion Failed: ${resultList[i]} !== ${expected[i]}`);
    }
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!