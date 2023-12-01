// let a = 230; 
let a = 241; 
let firstDigit = Math.floor(a / 100);
let secondDigit = Math.floor((a / 10) % 10);
let thirdDigit = a % 10; // Uchinchi raqam


let sumOfDigits = firstDigit + secondDigit + thirdDigit;


let productOfDigits = firstDigit * secondDigit * thirdDigit;

console.log("Raqamlari yig'indisi: " + sumOfDigits);
console.log("Raqamlari ko'paytmasi: " + productOfDigits);
