// 1. Start with an array of numbers and create a new array with only the numbers less than 20.
//    For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].
// let numbers = [2, 32, 80, 18, 12, 3];
// let newNumbers = numbers.filter((number) => number < 20);
// console.log(newNumbers);

// 2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
//    For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].
// let strings = ["winner", "winner", "chicken", "dinner"];
// let wStrings = strings.filter((string) => string[0] === "w");
// console.log(wStrings);

// 3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].
// let items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// let premiumItems = items.filter((item) => item.price > 5);
// console.log(premiumItems);

// 4. Start with an array of numbers and create a new array with only the even numbers.
//    For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].
// let numbers = [2, 4, 5, 1, 8, 9, 7];
// let evens = numbers.filter((number) => number % 2 === 0);
// console.log(evens)

// 5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
//    For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].
// let strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
// let aStrings = strings.filter((string) => string.length < 4);
// console.log(aStrings);

// 6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].
// let items = [
//    { name: "chair", price: 100 },
//    { name: "pencil", price: 1 },
//    { name: "book", price: 4 }
// ]
// var expensiveItems = items.filter(item => item.price > 5);
// console.log(expensiveItems)

// 7. Start with an array of numbers and create a new array with only the numbers less than 10.
//    For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

// 8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
//    For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

// 9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

//10. Start with an array of numbers and create a new array with only the odd numbers.
//    For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
// var numbers = [2, 4, 5, 1, 8, 9, 7];
// let odd = numbers.filter(number => number % 2 != 0);
// console.log(odd);