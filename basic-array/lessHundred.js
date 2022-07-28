// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.
// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]


var numbers = [99, 101, 88, 4, 2000, 50];
var index = 0;
var lessHundred = [];
while (index < numbers.length) {
  if (numbers[index] < 100) {
    lessHundred.push(numbers[index]);
  }
  index++
}
console.log(lessHundred)
