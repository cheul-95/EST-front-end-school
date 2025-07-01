const numbers = [51, 20, 12, 5, 2];
const halfNumver = numbers.map((x) => x / 2);
console.log(halfNumver);

const number15 = numbers.filter((x) => 15 > x);
console.log(number15);

const under15First = numbers.find((x) => 15 > x);
console.log(under15First);

let numbers2 = [153, 7, 55];
numbers2 = [...numbers2.join("")].filter((x) => 5 == x);
console.log(numbers2);

let users = ["Daniel", "Don", "donald", "Mincheal", "Jusliet"];
users = users.filter((x) => x.toLowerCase().includes("d"));
console.log(users);

function yangkochi(n, k) {
    return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}
console.log(yangkochi(10, 3));
