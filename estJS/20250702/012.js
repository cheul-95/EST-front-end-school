/**
 * 구조분해할당
 */
const animals = ["puppy", "cat", "parrot", "lion", "tiger", "duck", "panda"];
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = animals;
console.log(a, b, rest);
//const newArr = animals.concat(numbers);
const newArr = [...animals, ...numbers];
console.log(newArr);

function calc(a, b) {
    return [a + b, a / b];
}

const array = calc(10, 2);
console.log(array);

const [sum, div] = calc(15, 3);
console.log(sum, div);

const array2 = ["apple", "mango", "banana"];
const [a1, b1, c1] = array2;
console.log(a1);
console.log(b1);
console.log(c1);

console.clear();

function calc2(a, b) {
    return [a + b, a / b, a * b];
}
const [sum2, div2, multiply = "NO multiply", diff = "NO Diff"] = calc2(15, 3);
console.log(sum2, div2, multiply, diff);
