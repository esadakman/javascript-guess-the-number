// !=========Random Number==============================
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
// !=========Gap Number==============================
let randomNumberFloor = 100 - randomNumber;
console.log(randomNumberFloor);
randomNumberFloor = Math.floor(randomNumber / 10) * 10 - 10;
console.log(randomNumberFloor);
let randomNumberCeiling = randomNumberFloor + 20;
console.log(randomNumberCeiling);
