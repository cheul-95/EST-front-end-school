const animals = ["puppy", "cat", "parret"];
let result = animals.filter((animals, index) => index > 2);
result = animals.map((animals, index) => index === 2);

animals.push("Rabbit");
result = animals.slice(1, 3);
result = animals.splice(1, 3, "elephant");
const arr = ["apple", "mango", "banana"];
arr.reverse();

console.log(arr);
