const meaningOfLifeArray = [42];
const object = {
	data: {
		duplicate: "e",
		stuff: {
			thing: {
				banana: NaN,
				moreStuff: {
					something: "foo",
					answer: meaningOfLifeArray,
				},
			},
		},
		info: {
			duplicate: "e",
			magicNumber: 44,
			empty: null,
		},
	},
};

const contains = function (obj, goal) {
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

// console.log(contains(object, 44));

console.log(contains(object, "bar"))
// Do not edit below this line
module.exports = contains;
