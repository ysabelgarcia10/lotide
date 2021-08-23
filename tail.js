//returns an array of the tails only from the listed items "actual"
let resultList = [];
const tail = function(listItems) {
  return listItems.slice(1);
};

module.exports = tail;