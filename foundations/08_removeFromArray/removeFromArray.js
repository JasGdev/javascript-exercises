//grab all parameters after first and form an array
//iterate across parameters, and go through arr removing it as we encounter it

const removeFromArray = function(arr, ...removeItems) {
    for (let removeItem of removeItems){
        arr = arr.filter((item) => item !== removeItem);
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
