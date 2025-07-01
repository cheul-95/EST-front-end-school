const obj = {
    name: "ghost",
    age: 1000,
    sayHeollo() {
        return `Hello, ${this.name}`;
    },
    sayBye: function () {
        return `Good bye ,${this.name}`;
    },
    getAge: () => {
        return this.age;
    },
};

console.log(obj.sayHeollo());
console.log(obj.sayBye());
console.log(obj.getAge());

const ghost = {
    age: 1000,
    mbti: "ISTJ",
    say() {
        console.log(`say Hello`);
    },
};

console.log(ghost.age, ghost.mbti);
ghost.age = 500;

console.log(ghost);
const type = "age";
console.log(ghost[type]);
ghost.say();
