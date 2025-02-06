
// 1. Filter Even Numbers
const num = [10, 15, 20, 25, 30];
const evenNumbers = num.filter(num => num % 2 === 0);
console.log(evenNumbers); // 

// 2. Filter Words Longer Than 5 Characters
const word = ["apple", "banana", "cat", "elephant", "dog"];
const longWords = word.filter(word => word.length > 5);
console.log(longWords); // 

// 3. Filter Adults from an Array of Objects
const user = [
    { name: "Emma", age: 17 },
    { name: "Liam", age: 22 },
    { name: "Olivia", age: 29 },
    { name: "Noah", age: 15 }
];
const adults = user.filter(user => user.age >= 18);
console.log(adults); 


// 4. Filter Out Negative Numbers
const number = [5, -3, 10, -8, 0, 12];
const positiveNumbers = number.filter(num => num >= 0);
console.log(positiveNumbers); 

// 5. Filter Words Starting with "A"
const item = ["Apple", "Banana", "Avocado", "Cherry", "Apricot"];
const wordsStartingWithA = item.filter(word => word.startsWith("A"));
console.log(wordsStartingWithA); 

// 6. Filter Prices Above 100
const price = [50, 120, 80, 200, 300, 90];
const expensivePrices = price.filter(price => price > 100);
console.log(expensivePrices); 

// 7. Filter Strings That Contain the Letter "e"
const fruit = ["apple", "grape", "melon", "kiwi", "pear"];
const wordsWithE = fruit.filter(word => word.includes("e"));
console.log(wordsWithE); 

// 8. Filter Non-Empty Strings
const text = ["hello", "", "world", "", "JavaScript"];
const nonEmptyStrings = text.filter(text => text !== "");
console.log(nonEmptyStrings); 

// 9. Filter Employees Who Have a Salary Above 5000
const employees = [
    { name: "Alice", salary: 4000 },
    { name: "Bob", salary: 6000 },
    { name: "Charlie", salary: 7000 },
    { name: "David", salary: 4500 }
];
const highSalaryEmployees = employees.filter(employee => employee.salary > 5000);
console.log(highSalaryEmployees); 


// 10. Filter Phone Numbers Starting with "9"
const phoneNumber = ["9876543210", "1234567890", "9123456789", "8765432109"];
const numbersStartingWith9 = phoneNumber.filter(num => num.startsWith("9"));
console.log(numbersStartingWith9); 