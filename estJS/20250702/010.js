const user = { name: "Ghost", age: 1000 };
const newUser = Object.assign({ name: "Irangi", bloodType: "B" }, user);

user.mbti = "INFJ";
console.log(user, newUser);
console.log(user === newUser);

const obj = { name: "Apple" };
obj.name = "Mango";
console.log(obj);

const user2 = {
    name: "Ghost",
    age: 1000,
    pets: { dog: "Bobby", parret: "Cherry" },
};
// const newUser2 = Object.assign({}, user2);
const newUser2 = { ...user2 };
newUser2.age = 500;
console.log(user2, newUser2);
console.log(user2 === newUser2);

newUser2.pets.dog = "Bombu";
console.log(user2.pets.dog, newUser2.pets.dog);
console.log(user2.pets.dog === newUser2.pets.dog);

const newUser3 = JSON.parse(JSON.stringify(user2));
newUser3.pets.parret = "Alpha";
console.log(newUser2);
console.log(newUser3);
console.log(newUser2.pets.parret === newUser3.pets.parret);
