// Write a function that accepts an array of numbers and returns the product of all the numbers.
// 
// Input: [1, 2, 3, 4]
// Output: 24
// 
// Explanation: (1 x 2 x 3 x 4) = 24

var numbers = [1, 2, 3, 4];
var index = 0;
totalProduct = 1;
while (index < numbers.length) {
  totalProduct *= numbers[index]
  index++
}
console.log(totalProduct)
