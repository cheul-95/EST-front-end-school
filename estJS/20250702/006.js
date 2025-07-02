const person = { name: "Ghost", age: 20 };
delete person.age;
console.log(person);

const keyName = [];
for (const key in person) {
    keyName.push(key);
    console.log(key);
}

console.log(keyName);
