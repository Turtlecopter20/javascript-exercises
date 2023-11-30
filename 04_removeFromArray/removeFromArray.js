const removeFromArray = function(theArray, toSubstract) {
for (let i = 0; i < theArray.length; i++){
if (theArray[i] == toSubstract) {
    theArray.splice(i,1);
}
}
return theArray;
}

// Do not edit below this line
module.exports = removeFromArray;
