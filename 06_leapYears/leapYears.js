const leapYears = function(checkedYear) {
if (checkedYear % 4 === 0) {
    if (checkedYear % 100 === 0 && checkedYear % 400 !== 0) return false;
    else return true;
}
else return false;
};

// Do not edit below this line
module.exports = leapYears;
