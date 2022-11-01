// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

function duplicatCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      return str[i];
    }
  }
  return "no results";
}

console.log(duplicatCharacter("abcdefghhijkkloooop"));
console.log(duplicatCharacter("abcde  ooooop"));
console.log(duplicatCharacter("abcde"));