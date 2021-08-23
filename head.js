const assertEqual = require("./assertEqual");

const head = function(listItems) {
  let actual = listItems[0];
  console.log(actual)
  return actual;
};

module.exports = head;