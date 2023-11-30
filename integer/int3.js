// let a = 231; 
let a = 765;

let firstDigit = Math.floor(a / 100);
let lastDigit = a % 10;

// O'zgartirilgan sonni topish
let newNumber = lastDigit * 100 + a % 100 - lastDigit + firstDigit;

console.log(newNumber); 
