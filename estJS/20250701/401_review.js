const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter((x) => !(x % 2)));

const arr2 = [1, 2, 3, 4];
console.log(arr2.map((x) => x ** 2));

const arr3 = [5, 2, 9, 1];
console.log(arr3.sort((a, b) => b - a));

const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.reduce((x, i) => x + i));

const arr5 = [3, -1, 5, 7];
console.log(arr5.some((x) => x < 0));

const arr6 = [4, 5, 6];
console.log(arr6.every((x) => x > 3));

function solution(names) {
    names.forEach((x) => {
        console.log(x);
    });
}
solution(["Irgangi", "Camel", "Shoopa"]);

function solution2(scores) {
    scores
        .filter((x) => x >= 60)
        .map((x) => {
            console.log(x * 2);
        });
}
solution2([50, 60, 70, 80]);

function solution3(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    return [...my_string].filter((x) => !vowels.includes(x)).join("");
}
console.log(solution3("beautiful"));

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const arr7 = [];
for (let i = 1; i <= 10; i++) {
    if (!(i % 3)) {
        arr7.push(i);
    }
}
console.log(arr7);
