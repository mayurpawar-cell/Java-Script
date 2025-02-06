    
// 1. Square Numbers
const numbers = [3, 7, 9, 12];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); 

// 2. Convert Strings to Uppercase
const words = ["cat", "dog", "fish"];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords); 

// 3. Extract Property from Object Array
const users = [
    { name: "Emma", age: 21 },
    { name: "Liam", age: 28 },
    { name: "Olivia", age: 25 }
];
const userNames = users.map(user => user.name);
console.log(userNames); 

// 4. Convert Celsius to Fahrenheit
const celsiusTemps = [5, 15, 25, 35];
const fahrenheitTemps = celsiusTemps.map(c => (c * 9/5) + 32);
console.log(fahrenheitTemps); 

// 5. Add Prefix to Strings
const items = ["home", "car", "laptop"];
const prefixedItems = items.map(item => `My ${item}`);
console.log(prefixedItems); 

// 6. Calculate Discounts
const prices = [150, 250, 350];
const discountedPrices = prices.map(price => price * 0.8);
console.log(discountedPrices); 

// 7. Format Phone Numbers
const phoneNumbers = ["5551234567", "6669876543", "7773456789"];
const formattedNumbers = phoneNumbers.map(num => `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6)}`);
console.log(formattedNumbers); 

// 8. Reverse Strings
const fruits = ["apple", "banana", "cherry"];
const reversedFruits = fruits.map(fruit => fruit.split('').reverse().join(''));
console.log(reversedFruits); 

// 9. Double Elements in Array
const nums = [1, 5, 10, 20];
const doubledNums = nums.map(num => num * 2);
console.log(doubledNums); 

// 10. Extract Domain from Emails
const emails = ["mike@hello.com", "sara@work.org", "jane@site.net"];
const domains = emails.map(email => email.split('@')[1]);
console.log(domains); 


