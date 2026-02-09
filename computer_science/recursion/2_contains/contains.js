const contains = function (obj, goal) {
	// better to use includes here on the array Object.values(obj);
	if (obj === goal || (Number.isNaN(obj) && Number.isNaN(goal))) {
		return true;
	} else if (typeof obj == "object" && obj != null) {
		const values = Object.values(obj);
		if (values.some((value) => contains(value, goal))) {
			return true;
		}
	}
	return false;
};


// Do not edit below this line
module.exports = contains;
