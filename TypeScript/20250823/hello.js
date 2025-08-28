// hello.ts
function greet(name) {
    return "\uC548\uB155\uD558\uC138\uC694, ".concat(name, "\uB2D8!");
}
var message = greet("타입스크립트");
console.log(message);
// 타입 오류 예시 (주석 해제하면 오류 발생)
// console.log(greet(123));
// 2.1 기본 타입 지정하기
var userName = "김개발";
var userAge = 25;
var isStudent = true;
var numbers = [1, 2, 3, 4, 5];
var tuple = ["typescript", 100];
//2.2 타입 추론 이해하기
var value = "Hello";
value = 42;
var numbers2 = [1, 2, 3];
numbers2.push("4");
var mixed = [1, "two", 3];
mixed.push(true);
//2.3 void와 never 이해하기
function logMessage(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("무한 루프");
    }
}
//2.4 변수 순회하기
var fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit) {
    console.log(fruit);
});
