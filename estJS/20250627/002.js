console.clear();
const str = "Hello World!";
console.log(str.length);

console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));

console.log(str.includes("o"));
console.log(str.includes("a"));

console.log(str.slice(1,4));
console.log(str.slice(4));
console.log(str.slice(-5));

const email = "ghost@gmail.com"
let result = email.slice(0,5);
console.log(result); //ghost
result = email.indexOf("@");
console.log(result); //@ 위치 찾기

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const str2 = "A.B.C"
const newStr = str2.split(".");
console.log(newStr);
console.log(email.split("@")[1]);

const url1 = "http://www.ghost.com/about";
const url2 = "http://www.ghost.com/contactUs";

result = url1.split("/").at(-1);
console.log(result);
result = url2.split("/").at(-1);
console.log(result);
const str3 = "    hello    world    ";
console.log(str3.trimStart(),"-");
console.log(str3.trimEnd(),"-");
console.log(str3.trim(),"-");

const star = "*";
console.log(star.repeat(5));

console.log( str.replace("H","W"), str);

const num = "7"; //007
const num2 = "27"; //007
//3자리로 나타낼건데 앞이 비었다면 0추가
console.log(num.padStart( 3,"0" ));
console.log(num2.padStart( 3,"0" )); 
console.log(num.padEnd( 3,"^" )); 

const coin ="3200";
const cost ="1000";
console.log(coin.padEnd(7, "0"));

console.log((Number(coin) - Number(cost))*1000);