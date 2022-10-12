// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.
// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]


function lessThanHundred(array) {
  var index = 0;
  var lessHundred = [];
  while (index < array.length) {
    if (array[index] < 100) {
      lessHundred.push(array[index]);
    }
    index++
  }
  return lessHundred
}
console.log(lessThanHundred([99, 101, 88, 4, 2000, 50]))