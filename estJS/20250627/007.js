console.clear();
const arr = [10, 20, 30, 40, 50];

// find
const bigger20 = arr.find((x) => x >= 20);
const bigger30 = arr.findIndex((x) => x >= 30);
console.log(`20이상의 수는 ${bigger20}`);
console.log(`30이상의 수는 ${bigger30}`);

const number = [15, 20, 17, 3, 80];
//filter
const bigger2_20 = number.filter((x) => x >= 20);
console.log(`20이상의 수는 ${bigger2_20}`);
const oddNumbers = number.filter((x) => x % 2 === 1);
console.log(`홀수 : ${oddNumbers}`);

const dobleNumbers = number.map((x) => x * 2);
console.log(dobleNumbers);
