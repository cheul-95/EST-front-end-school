const user = {
    name: "Ghost",
    age: 1000,
};

console.log("name" in user);
console.log("color" in user);

const arr = ["a", "b", "c"];
for (const idx in arr) {
    console.log("array:", idx);
}
for (const key in user) {
    console.log("object:", key);
}
