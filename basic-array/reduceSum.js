//! input: [1, 2, 3, 4]
//! output: 10
function reduceSum(numbers) {
  var sum = 0;
  var index = 0;
  while (index < numbers.length) {
    sum += numbers[index];
    index += 1
  }
  return sum;
}
console.log(reduceSum([1, 2, 3, 4]))