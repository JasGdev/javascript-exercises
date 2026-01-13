const reverseString = function(string) {
    reversedString = '';
    for (let char of string){
        reversedString = char + reversedString;
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
