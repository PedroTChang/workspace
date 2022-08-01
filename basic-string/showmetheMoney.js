// Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.
// 
// Input: “i hate $ but i love money i know i know im crazy”
// Output: true
// 
// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false

function ifMoney(string) {
  for (let index = 0; index < string.length - 1; index++) {
    if (string[index] === '$') {
      return true;
    }
  }

  return false;
}
console.log(ifMoney("i hate $ but i love money i know i know im crazy"));
console.log(ifMoney("abcdefghijklmnopqrstuvwxyz"))
