// 1. Start with an array of numbers and create a new array with only the numbers less than 20.
//    For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// 2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
//    For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// 3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].
// var items = [
//   { name: "chair", price: 180 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var expensiveItems = [];
// var index = 0;
// while (index < items.length) {
//   if (items[index].price > 5) {
//     expensiveItems.push(items[index]);
//   }
//   index++
// }
// console.log(expensiveItems)


// 4. Start with an array of numbers and create a new array with only the even numbers.
//    For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].
// var numbers = [2, 4, 5, 1, 8, 9, 7]
// var evenNumbers = [];
// var index = 0;
// while (index < numbers.length) {
//   number = numbers[index]
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
//   index++
// }
// console.log(evenNumbers)

// 5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
//    For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].
// var strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var newStrings = [];
// var index = 0;
// while (index < strings.length) {
//   string = strings[index];
//   if (string.length < 4) {
//     newStrings.push(string);
//   }
//   index++
// }
// console.log(newStrings);

// 6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].
// var items = [
//   { name: "chair", price: 100 },
//   { name: "book", price: 4},
//   { name: "pencil", price: 1}
// ]
// var shorterNames = [];
// var index = 0;
// while (index < items.length) {
//   var item = items[index]
//   if (item.name.length < 6) {
//     shorterNames.push(item)
//   }
//   index++
// }
// console.log(shorterNames)

// 7. Start with an array of numbers and create a new array with only the numbers less than 10.
//    For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].
// var numbers = [8, 23, 0, 44, 1980, 3]
// var newNumbers = []
// var index = 0
// while (index < numbers.length) {
//   var number = numbers[index]
//   if (number < 10) {
//     newNumbers.push(number)
//   }
//   index++
// }
// console.log(newNumbers)

// 8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
//    For example, ["big", "little", "good", "bad"] becomes ["little", "good"].
// var strings = ['big', 'little', 'good', 'bad'];
// var newStrings = [];
// var index = 0;
// while (index < strings.length) {
//   var string = strings[index];
//   if (string[0] != "b") {
//     newStrings.push(string);
//   }
//   index++
// }
// console.log(newStrings)

// 9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].
// const items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 }
// ]
//   var index = 0;
// const saleItems = [];
// while (index < items.length) {
//   const item = items[index]
//   if (item["price"] < 10) {
//     saleItems.push(item);
//   }
//     index++
// }
//   console.log(saleItems)

//10. Start with an array of numbers and create a new array with only the odd numbers.
//    For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
let numbers = [2, 4, 5, 1, 8, 9, 7];
let odd = [];
let index = 0;
while (index < numbers.length) {
	let number = numbers[index];
	if (number % 2 !== 0) {
		odd.push(number);
	}
	index++
}
	console.log(odd)