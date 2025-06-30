const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((a, c) => a + c);

console.log(total);
const numbers2 = [10, 23, 15, 3, 2, 12, 30, 42, 50];
const total2 = numbers2.filter((x, i) => i % 2).reduce((a, c) => a + c, 0);
console.log(total2);

const arr = Array(10)
    .fill(0)
    .map((_, i) => i + 1);

console.log(arr);
function sumNubers(number) {
    const arr = Array(number)
        .fill(0)
        .map((_, i) => i + 1)
        .reduce((a, c) => a + c, 0);
    return arr;
}
