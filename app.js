// 1. Custom Odd Number Finder
function checkOddNumber(num, callback) {
    return callback(num);
}

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(checkOddNumber(5, isOdd)); 


// 3. Function Execution Tracker
function executeWithLog(callback) {
    console.log("Executing...");
    callback();
}

function logExecution() {
    console.log("Callback function executed");
}

executeWithLog(logExecution);

// 4. Square Root Calculator Using Callback
function calculateSquareRoot(num, callback) {
    return callback(num);
}

function sqrtApprox(num) {
    let x = num;
    let y = 1;
    let precision = 0.00001;
    while (x - y > precision) {
        x = (x + y) / 2;
        y = num / x;
    }
    return x;
}

console.log(calculateSquareRoot(25, sqrtApprox)); // ~5

// 5. Execute Function N Times
function repeatFunction(n, callback) {
    for (let i = 1; i <= n; i++) {
        console.log(`Iteration: ${i}`);
        callback();
    }
}

function printMessage() {
    console.log("Hello");
}

repeatFunction(3, printMessage);

// 6. Find Maximum of Two Numbers Using Callback
function findMax(a, b, callback) {
    return callback(a, b);
}

function maxCallback(a, b) {
    return a > b ? a : b;
}

console.log(findMax(10, 20, maxCallback)); // 20

// 7. Custom Character Replacer in a String
function replaceCharacter(str, char, callback) {
    return callback(str, char);
}

function replaceWithAsterisk(str, char) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] === char ? "*" : str[i];
    }
    return result;
}

console.log(replaceCharacter("hello world", "o", replaceWithAsterisk)); // hell* w*rld

// 8. String Concatenation Using Callback
function concatenateStrings(str1, str2, callback) {
    return callback(str1, str2);
}

function concatCallback(s1, s2) {
    return s1 + s2;
}

console.log(concatenateStrings("Hello", " World", concatCallback)); // Hello World

// 9. Number Divider with Validation
function safeDivide(a, b, callback) {
    return callback(a, b);
}

function divisionCallback(a, b) {
    return b === 0 ? "Error" : a / b;
}

console.log(safeDivide(10, 2, divisionCallback)); // 5
console.log(safeDivide(10, 0, divisionCallback)); // Error

// 10. Convert Celsius to Fahrenheit Using Callback
function convertTemperature(celsius, callback) {
    return callback(celsius);
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

console.log(convertTemperature(0, celsiusToFahrenheit)); // 32
