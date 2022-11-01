// Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

// Input: “racecar”
// Output: true

// Input: “baloney”
// Output: false

const clean = (string) => string.toLowerCase().replace(/[\W_]/g, "");

const palindrome = (string) => {
  const cleanString = clean(string);
  return cleanString
    .split("")
    .every(
      (element, index) =>
        element === cleanString[cleanString.length - 1 - index]
    );
};
console.log(palindrome("racecar"));


