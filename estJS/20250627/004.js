console.clear();
const str ="123";
const num =123;

console.log(num+""); 
console.log(num.toString()); 

const arr = ['a','b','c'];
console.log(arr.toString()); 

console.log(true.toString()); 
console.log(false.toString()); 

/* object - user 변수에 mbti -> infi */
const user = [
    {    "mbti":"infj",
    "bllodType": "B" }
]
console.log(user[0].toString); // 객체 반환 
console.log(JSON.stringify( user[0]));

console.log(num.toString(16));
//랜덤한 RGB 값을 구해서 -> 16진수로 변환 하시오.
const r = Math.floor(Math.random()*256).toString(16).padStart(2, '0'); 
const g = Math.floor(Math.random()*256).toString(16).padStart(2, '0');
const b = Math.floor(Math.random()*256).toString(16).padStart(2, '0');
console.log(`rgb:(#${r}${g}${b})`);

function createHexValue1(){
    const r = Math.floor(Math.random()*256).toString(16).padStart(2, '0');
    const g = Math.floor(Math.random()*256).toString(16).padStart(2, '0');
    const b = Math.floor(Math.random()*256).toString(16).padStart(2, '0');
    return "#"+r+g+b;
}
console.log(createHexValue1());

function getRandomHex(){
    return Math.floor(Math.random()*256).toString(16).padStart(2, '0'); 
}
function createHexValue2(){
    return "#"+getRandomHex()+getRandomHex()+getRandomHex();
}
console.log(createHexValue2());

const num2 = 123.456;
const Newnum = num2.toFixed(2);
console.log(Newnum);
