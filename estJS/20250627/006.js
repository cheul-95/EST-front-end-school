// 선언적 함수 , 함수 선언식
function sum(a, b) {
    return a + b;
}
//함수표현식
const evenCheck = function (number) {
    return number % 2 ? "홀수" : "짝수";
};
const sum2 = (a, b) => {
    return a + b;
};
function getRandom(value) {
    return Math.floor(Math.random() * value + 1);
}
const getRandom1 = (value) => {
    return Math.floor(Math.random() * value + 1);
};
const getRandom2 = function (value) {
    return Math.floor(Math.random() * value + 1);
};
console.log(getRandom(3));
