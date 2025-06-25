console.log("Hello World");
console.log("Hello ", "world");
console.log("Hello ", 3," world");

var a = 3; 
let b =12;
const c = 15;

console.log(a);
var a = 5;
b = 5; // let b= 5는 재선언 불가 값을 재활당 하는것은 가능.
// c = 5; const는 재할당도 불가.

console.log(a);
console.log(b);
console.log(c);

const userName = "Ghost";
// const sayHi = "Hello" + userName + "!";
// Template Literal
const sayHi = `Hello ${userName}!`;
console.log(sayHi);

console.log("a"+"b");
console.log("1"+"2");
console.log(1 + 2);

console.log("출력 : 3 + 5 =",3+5,"입니다");
// 변수 스코프
function scope(){
    var a ="Hello";
    if(true){
        var a = "World";
        console.log(a);
    }
    console.log(a);
}

scope();

function scope2(){
    let a ="Hello";
    if(true){
        let a = "World";
        console.log(a);
    }
    console.log(a);
}
scope2();
const fruits = ["apple","banan","mango"];
console.log(fruits[2]);
const friends = [
    {  name : 'ghost', age : 1000},
    {  name : 'ghost2', age : 2000},
] ;
console.log(friends);