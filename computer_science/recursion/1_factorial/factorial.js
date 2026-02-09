const factorial = function(int) {
    if (!Number.isInteger(int) || int < 0){
        return undefined
    }
    if (int == 0) {return 1}
    return int * factorial(int-1)
};

// Do not edit below this line
module.exports = factorial;
