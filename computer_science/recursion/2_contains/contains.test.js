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

function contains(object) {
	const emptyArr = [];
	for (let key in object) {
		emptyArr.push(object[key]);
	}

	return emptyArr;
}



test('test looping through object', () => {
    expect(contains(object)).toBe([])
})



