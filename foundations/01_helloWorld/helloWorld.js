<<<<<<< HEAD
// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.
=======
const helloWorld = function() {
  return 'Hello, World!'
};
>>>>>>> 6e77b6080b6c90a113a6d8eaa38a0cdb1bd7d232

<<<<<<< HEAD
module.exports = helloWorld;

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge1(age) {
  return (age > 18 || confirm('Did parents allow you?'))
}

function checkAge2(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
=======
function sumOfTripledEvens(array){
  const evenNums = array.filters((num) => num % 2 == 0);
  const tripleNums = evenNums.map((num) => num = num * 3);
  const sum = tripleNums.reduce((total, currentItem) => total + currentItem, 0);
  return sum
>>>>>>> 67ea8f92a286b59961e6d18c87e698d70156441a
}
