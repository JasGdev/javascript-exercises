const permutations = function (array) {
	let totalArray = [];
	if (array.length === 0) {
		return [[]];
	}
	if (array.length === 1) {
		return [array];
	} else if (array.length === 2) {
		return [array, [array[1], array[0]]];
	} else {
		for (const int of array) {
			const splitArr1 = [int];
			const intIndex = array.indexOf(int);
			const splitArr2 = array.slice();
			splitArr2.splice(intIndex, 1);
			const splitArr2Perms = permutations(splitArr2);
			for (const perm of splitArr2Perms) {
				if (!totalArray.includes(splitArr1.concat(perm))) {
					totalArray.push(splitArr1.concat(perm));
				}
			}
		}
	}
	return totalArray;
};

// Do not edit below this line
module.exports = permutations;
