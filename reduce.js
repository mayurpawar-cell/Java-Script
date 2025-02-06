
// 1. Find the Sum of an Array
const numbers = [5, 10, 15, 20];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 

// 2. Multiply All Numbers in an Array
const nums = [2, 4, 6, 8];
const product = nums.reduce((acc, num) => acc * num, 1);
console.log(product); 

// 3. Find the Maximum Number
const maxNumbers = [12, 45, 2, 89, 33];
const maxNum = Math.max(...maxNumbers);
console.log(maxNum); 

// 4. Find the Minimum Number
const minNumbers = [99, 32, 1, 18, 55];
const minNum = Math.min(minNumbers);
console.log(minNum); 

// 5. Count Occurrences of Words in an Array
const words = ["apple", "banana", "apple", "cherry", "banana", "banana"];
const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
console.log(wordCount); 

// 6. Flatten a Deeply Nested Array
const nestedArray = [[[1, 2]], [[3, 4]], [[5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); 

// 7. Calculate Total Salary of Employees
const employees = [
    { name: "Alice", salary: 4000 },
    { name: "Bob", salary: 6000 },
    { name: "Charlie", salary: 7000 }
];
const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(totalSalary); 

// 8. Concatenate Strings in an Array
const phrases = ["Coding", "is", "awesome"];
const sentence = phrases.join(" ");
console.log(sentence); 

// 9. Remove Duplicates from an Array
const duplicateNumbers = [9, 2, 8, 2, 9, 7, 5];
const uniqueNumbers = [...new Set(duplicateNumbers)];
console.log(uniqueNumbers); 

// 10. Group People by Their Age
const people = [
    { name: "Tom", age: 22 },
    { name: "Jerry", age: 25 },
    { name: "Lucy", age: 22 },
    { name: "Mark", age: 30 }
];
const groupedByAge = people.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person.name);
    return acc;
}, {});
console.log(groupedByAge);

