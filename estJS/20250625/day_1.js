console.clear();
let block1_name = "Ghost";
const block1_age = 1000;
console.log(block1_name);
console.log(block1_age);

let block2_age = 25;
block2_age = 30;
console.log(block2_age);

const block6_user ={name:"Bob"};
block6_user.name = "Tom";
console.log(block6_user);

const block7_user ={name:"홍길동",age:"100"};
console.log(`안녕하세요 , 저는 ${block7_user.name} 이고  ${block7_user.age}살 입니다.`);

const block10_fruits = ['apple','banana'] ;
block10_fruits[0] = "Orange";
console.log(block10_fruits);

const block11_name ="홍길동";
console.log(`안녕하세요, ${block11_name} 님!`);

let block12_num1 = 3;
let block12_num2 = 5;
console.log(`${block12_num1}+${block12_num2}=${block12_num1+block12_num2}`)

let block13_num1 = 6;
let block13_num2 = 2;
console.log(`${block13_num1}*${block13_num2}=${block13_num1*block13_num2}`)
console.log(`${block13_num1}/${block13_num2}=${block13_num1/block13_num2}`)

function add(a,b){
    return a + b;
}
console.log(add(1,2))
function multi(a,b){
    return a * b;
}
console.log(multi(3,4))
function div(a,b){
    return a / b;
}
console.log(div(4,2))