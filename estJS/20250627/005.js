//array

const fruits = ['apple','mango','banana'];

fruits.unshift("watermelon","lemon")
fruits.push('grape')
fruits.pop()
fruits.shift();
console.log(fruits);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
// const newArr = arr1.concat(arr2);
const newArr = [...arr1,...arr2];
console.log(newArr);
console.log(Math.max(...arr1));

const str ="Ghost , World, Sunny";
const names = str.split(",");
const newNames = names.join("Hi");
console.log(newNames);

const newStr2 = [...str];
console.log(newStr2);
console.clear();

const user ="hello world";
result = user.indexOf("w");
console.log(result);

const animals = ["puppy","cat","parrt"]
result =animals.indexOf("cat")
result =animals.lastIndexOf("cat")
result =animals.includes("cat")
console.log(result);