const num1 = "123";
const num2 = 123;
const num3 = "hello";

//num 은 숫자 입니까? true or false

console.log(isNaN(num1));
console.log(isNaN(num2));
console.log(isNaN(num3));

console.log(Number.isNaN(num1));
console.log(Number.isNaN(num2));
console.log(Number.isNaN(num3));

const str ="I like apple pie.";
console.log(str.includes("apple"));
console.log(str.charAt(4));
console.log(str.indexOf("p"));
console.log(str.lastIndexOf("p"));
console.log(str.split(" "));
console.log(str.slice(str.indexOf("apple"),str.indexOf("apple")+5))
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const str2 ="    Hello World ";
console.log(str2.trim());
console.log(str2.replace("World","Ghost"));
console.log(str2.split(" ")[str2.indexOf("Hello")].repeat(3));
console.log(str2.replaceAll("o","-"));

const num4 = "7";
console.log(num4.padStart(3,"0"));

const a = "hello";
const b = "world";
console.log(a.concat(b));