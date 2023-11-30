// let a = 23; 
// let a = 21; 
// let a = 81; 
let a = 10; 

let firstDigit = Math.floor(a / 10); 
let secondDigit = a % 10; 

// Raqamlarni yig'indisi
let sumOfDigits = firstDigit + secondDigit;

// Raqamlarni ko'paytmasi
let productOfDigits = firstDigit * secondDigit;

console.log("Raqamlari yig'indisi: " + sumOfDigits);
console.log("Raqamlari ko'paytmasi: " + productOfDigits);
