//Declare variable that will be the word given
let word = "";
const reverseString = function(word) {
let middlestep = [];
//Split every character from that input into an array containing where every character is allocated a new index
for (let i= 0; i < word.length; i++) {
    middlestep[i] = word.charAt(i);
}
let returned="";
//Declare another variable that will be the string which will be the reverse input and iterate until the number of characters matches the first string
for (let j = word.length-1; j >= 0; j--){
 returned += middlestep[j];
}
return returned;
};

// Do not edit below this line
module.exports = reverseString;
