const removeFromArray = function(theArray, ...toSubstract) {
return theArray.filter(val => !toSubstract.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
