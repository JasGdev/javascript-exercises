const fibonacci = function(val) {
    if (val == 0){
        return 0
    } else if (val < 0){
        return 'OOPS'
    }
    let i1 = 1;
    let i2 = 1;
    for (index = 1; index < val; index++){
        sum = i1 + i2;
        i1 = i2;
        i2 = sum;
        console.log(i1)

    }
    return i1

};

// Do not edit below this line
module.exports = fibonacci;
