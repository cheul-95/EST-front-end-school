function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
const sayHello = function (name) {
    return `Hello ${name}`;
};
console.log(sayHello("Ghost"));
const getBigNumber = (numbers) => {
    return Math.max(...numbers);
};
console.log(getBigNumber([3, 4, 10, 12]));
