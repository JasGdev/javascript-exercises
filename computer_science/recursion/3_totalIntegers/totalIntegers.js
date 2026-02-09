const totalIntegers = function(arrOrObj) {
    if (typeof arrOrObj !== 'object' && !Array.isArray(arrOrObj)){
        return undefined
    }

	if (typeof arrOrObj === "object") {
		arrOrObj = Object.values(arrOrObj);
	}

    let count = 0;

    arrOrObj.forEach((item) => {
        if (Number.isInteger(item)) count += 1;
        else if ((typeof item === "object" && item !== null) || Array.isArray(item)) {
            count += totalIntegers(item)
        }
    })
    console.log(count);
    return count    
};

totalIntegers([1, 2, [3, 5, 'a']])
// Do not edit below this line
module.exports = totalIntegers;
