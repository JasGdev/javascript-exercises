<<<<<<< HEAD
// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.
=======
const helloWorld = function() {
  return 'Hello, World!'
};
>>>>>>> 6e77b6080b6c90a113a6d8eaa38a0cdb1bd7d232

function sumOfTripledEvens(array){
  const evenNums = array.filters((num) => num % 2 == 0);
  const tripleNums = evenNums.map((num) => num = num * 3);
  const sum = tripleNums.reduce((total, currentItem) => total + currentItem, 0);
  return sum
}
