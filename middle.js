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

module.exports = middle;
