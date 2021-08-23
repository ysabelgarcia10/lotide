const assertEqual = require("../assertEqual");
const tail = require("../tail")


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

//test case
const words = ["Yo Yo", "Lighthouse", "Labs"]; 
tail(words);
assertEqual(words.length, 3);
