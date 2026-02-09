const pascal = function (num, rowNum = 1, currentRow = [1]) {
    // console.log(`rowNum = ${rowNum} row = ${currentRow}`)
	if (num === rowNum) {
		return currentRow;
	}
	currentRow = [0].concat(currentRow);
	// console.log(currentRow);
	currentRow = currentRow.concat([0]);
	let newRow = [];
	for (let i = 0; i < currentRow.length - 1; i++) {
		newRow.push(currentRow[i] + currentRow[i + 1]);
	}
    // console.log(newRow)

	return pascal(num, rowNum + 1, newRow);


};

// console.log(pascal(2));

// Do not edit below this line
module.exports = pascal;
