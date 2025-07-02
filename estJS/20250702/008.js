const students = [
    { name: "Ghost", score: 85 },
    { name: "Camel", score: 92 },
    { name: "Mui", score: 78 },
];

console.log(typeof students);
console.log(Array.isArray(students));
const student = { name: "shoopa", score: 20 };
students.push(student);
console.log(students);

const arr = [30, 40, 50, 60];
const over50 = arr.filter((x) => x >= 50);
const over80 = students
    .filter((x) => x.score >= 80)
    .map((x) => console.log(x.name));

const numbers = [11, 2, 23, 1, 55];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);
const highScores = [...students].sort((a, b) => b.score - a.score);
console.log(highScores);
console.log(students);

const alphabets = ["banana", "Banana", "apple", "Zebra"];
alphabets.sort((a, b) => a.localeCompare(b));
console.log(alphabets);
alphabets.sort((a, b) => a.localeCompare(a));
console.log(alphabets);
