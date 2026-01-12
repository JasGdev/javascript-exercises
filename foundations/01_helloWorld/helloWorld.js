// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.

function sumOfTripledEvens(array){
  const evenNums = array.filters((num) => num % 2 == 0);
  const tripleNums = evenNums.map((num) => num = num * 3);
  const sum = tripleNums.reduce((total, currentItem) => total + currentItem, 0);
  return sum
}
