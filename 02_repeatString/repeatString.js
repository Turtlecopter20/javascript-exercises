let num;
let phrase;
const repeatString = function(phrase, num) {
let concat= "";
if (num < 0) concat="ERROR";
else for (let i = 1; i <= num; i++)
{
 concat += phrase;
}

return concat;
};

// Do not edit below this line
module.exports = repeatString;
