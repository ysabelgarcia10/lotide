const assertEqual = require("./assertEqual");

const head = function(listItems) {
  let actual = listItems[0];
  return actual;
};

module.exports = head;