//Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)
//Input: “hello, how are your porcupines today?”
//Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?” 


function makeCapital(string) {
   const alternateCapital = [];
   for (let i = 0; i < string.length; i++) {
      if (i % 2 != 0) {
         alternateCapital.push(string[i].toUpperCase());
      } else {
         alternateCapital.push(string[i]);
      }
   }
   return alternateCapital.join("");
}
console.log(makeCapital("hello, how are your porcupines today?"))