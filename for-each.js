// Double the Numbers
const numbers = [2, 4, 6, 8];
const doubledNumbers = [];
numbers.forEach(num => doubledNumbers.push(num * 2));
console.log(doubledNumbers); // [4, 8, 12, 16]

// Count Even and Odd Numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let evenCount = 0, oddCount = 0;
nums.forEach(num => num % 2 === 0 ? evenCount++ : oddCount++);
console.log(`Even: ${evenCount}, Odd: ${oddCount}`);

// Convert Names to Uppercase
const names = ["alice", "bob", "charlie"];
const uppercasedNames = [];
names.forEach(name => uppercasedNames.push(name.toUpperCase()));
console.log(uppercasedNames); // ["ALICE", "BOB", "CHARLIE"]

// Find the Maximum Number
const maxNums = [3, 9, 2, 12, 7];
let max = maxNums[0];
maxNums.forEach(num => { if (num > max) max = num; });
console.log(max); // 12

// Sum of All Numbers
const sumNums = [10, 20, 30, 40];
let totalSum = 0;
sumNums.forEach(num => totalSum += num);
console.log(totalSum); // 100

// Count Word Occurrences
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = {};
words.forEach(word => wordCount[word] = (wordCount[word] || 0) + 1);
console.log(wordCount); // { apple: 3, banana: 2, orange: 1 }

// Extract Emails from an Object Array
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" }
];
const emails = [];
users.forEach(user => emails.push(user.email));
console.log(emails); // ["alice@example.com", "bob@example.com"]

// Check if All Users Have Camera ON
const camUsers = [
  { name: "Alice", cam: true },
  { name: "Bob", cam: false },
  { name: "Charlie", cam: true }
];
let allCamsOn = true;
camUsers.forEach(user => { if (!user.cam) allCamsOn = false; });
console.log(allCamsOn); // false

// Remove Duplicates Without Using `Set`
const dupNumbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [];
dupNumbers.forEach(num => {
  if (!uniqueNumbers.includes(num)) uniqueNumbers.push(num);
});
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Find Users Above a Certain Age
const ageUsers = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 26 }
];
const above25 = [];
ageUsers.forEach(user => { if (user.age > 25) above25.push(user); });
console.log(above25); // [{ name: "Bob", age: 28 }, { name: "Charlie", age: 26 }]
