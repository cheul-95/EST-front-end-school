const friend1 = {
    name: "Ghost",
    age: 1000,
    skills: "fly",
};
const friend2 = {
    name: "Irangi",
    age: 500,
};

console.log("skills" in friend1);
console.log("skills" in friend2);

for (const key in friend1) {
    console.log(key, friend1[key]);
}
