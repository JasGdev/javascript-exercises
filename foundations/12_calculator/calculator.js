const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((sum, num) => sum += num, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total*num, 1)
};

const power = function(base, exponent) {
  return base ** exponent
	
};

const factorial = function(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++){
    factorial = i * factorial;
  }
  return factorial
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
