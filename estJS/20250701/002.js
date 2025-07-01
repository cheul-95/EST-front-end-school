const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => {
    console.log(fruit);
});

const str = "Hello";
console.log(str.length);

for (const spell of str) {
    console.log(spell);
}

let i = 4;
while (i < 10) {
    console.log(i);
    i++;
}
console.log("while 문이 끝났습니다.");

let j = 4;
do {
    console.log(j);
    j++;
} while (j < 10);

console.clear();
let k = 1;
// do {
//     console.log(k);
//     k += 2;
// } while (k < 10);

console.clear();
while (k < 10) {
    if (k === 5) {
        k += 2;
        continue;
    }
    console.log(k);
    k += 2;
}
