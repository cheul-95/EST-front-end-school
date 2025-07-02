const person = { name: "ghost", age: 20 };
console.log(person.name);
person.height = 180;
console.log(person);
const arr = ["a", "b", "c"];
const newArr = [];
const newArr2 = [];
for (const arr2 of arr) {
    newArr.push(arr2);
}
arr.forEach((x) => {
    newArr2.push(x);
});
console.log(newArr);
console.log(newArr2);
