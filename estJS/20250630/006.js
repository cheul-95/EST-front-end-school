const users = ["Daniel", "Don", "donald", "Micheal", "Juliet"];
for (let i = 0; i < users.length; i++) {
    console.log(`Heoll, ${users[i]}`);
}
let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;
    if (i == 10) {
        console.log(`sum : ${sum}`);
    }
}
let sum2 = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2) console.log(`i 짝수 : ${i}`);
}
let dan = 5;
for (let i = 2; i <= 9; i++) {
    console.log(`------${i}단--------`);
    for (let j = 1; j <= 9; j++) console.log(`${i} * ${j}= ${i * j}`);
}
