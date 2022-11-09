// 1. Start with an array of numbers and compute the sum of all the numbers.
//    For example, [5, 10, 8, 3] becomes 26.
// const numbers = [5, 10, 8, 3];
// const total = numbers.reduce((max, number) => {
//   return max + number;
// }, 0);
// console.log(total);

// 2. Start with an array of strings and combine them all into a single string.
//    For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".
// const strings = ["volleyball", "basketball", "badminton"];
// const jumblamation = strings.reduce((sum, string) => {
//   return sum + string;
// });
// console.log(jumblamation);

// 3. Start with an array of hashes and compute the sum of the prices (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.
// const items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// const priceSum = items.reduce((sum, number) => {
//    return sum + number.price
// }, 0)
// console.log(priceSum)

// 4. Start with an array of numbers and compute the the minumum number.
//    For example, [5, 10, 8, 3] becomes 3.
// const numbers = [5, 10, 8, 3];
// const lowest = numbers.reduce((min, number) => {
//   if (min > number) {
//     return number;
//   } else {
//     return min;
//   }
// }, numbers[0]);
// console.log(lowest)

// 5. Start with an array of strings and compute the total length of all the strings.
//    For example, ["volleyball", "basketball", "badminton"] becomes 29.
// const strings = ["volleyball", "basketball", "badminton"];
// const totalLength = strings.reduce(function (sum, string) {
//   return sum + string.length;
// }, 0);
// console.log(totalLength);

// 6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// 7. Start with an array of numbers and compute product of all the numbers.
//    For example, [5, 10, 8, 3] becomes 1200.
// const numbers = [5, 10, 8, 3];
// const product = numbers.reduce((product, number) => {
//   return product * number;
// }, 1);
// console.log(product)

// 8. Start with an array of strings and combine them all into a single string, separated by dashes.
//    For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".
// const strings = ["volleyball", "basketball", "badminton"];
// const combine = strings.reduce((total, string) => {
//   return total + string + "-";
// }, "-");
// console.log(combine);

// 9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.
// const items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// const short = items.reduce((shortestName, item) => {
//   if (shortestName.name.length < item.name.length) {
//     return shortestName;
//   } else {
//     return item;
//   }
// }, items[0]);
// console.log(short);

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.
// const numbers = [5, 10, 8, 3];
// const highestNumber = numbers.reduce((max, number) => {
//   if (max > number) {
//     return max;
//   } else {
//     return number;
//   }
// }, numbers[0]);
// console.log(highestNumber);
