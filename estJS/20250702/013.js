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

const btn = document.getElementById("btn");
btn.addEventListener("mouseleave", (x) => {
    btn.textContent = "마우스를 올려보세요";
});
btn.addEventListener("mouseenter", (x) => {
    btn.textContent = "마우스 IN";
});
