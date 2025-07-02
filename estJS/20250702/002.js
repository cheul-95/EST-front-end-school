const user = {
    nmae: "ghost",
    age: 1000,
    skills: ["fly", "swim"],
    pets: {
        dog: {
            name: "bobby",
            age: 8,
        },
        parret: {
            name: "cherry",
            age: 3,
        },
    },
    sayHello() {
        return `Hello, ${this.name}`;
    },
};

console.log(user.sayHello());

delete user.pets;
//console.log(user.skills[1]);
user.mbti = "istj";
delete user.age;
user.nmae = "tsohG";
console.log(user);

user.sayBye = () => {
    return `Good-bye, ${user.name}`;
};

user.myskill = function () {
    return `나의 능력은 ${this.skills}`;
};
console.log(user);
console.log(user.sayBye());
console.log(user.myskill());
