console.clear();
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr);

const users = ["Daniel", "Amy", "donald", "Micheal", "Juliet"];
console.log(users.sort());

const numbers = [51, 2, 12, 1, 22, 5];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

const numbers2 = [1, 2, 3, 4, 5];

const allEven = numbers2.every((num) => num % 2 === 0);
console.log(allEven);
console.clear();

const hasAmy = users.some((user) => user.toLowerCase() === "amy");
console.log(hasAmy);

const hasNumber = numbers2.some((x) => x >= 3);
console.log(hasNumber);

const fruits = ["apple", "banana", 3];
const fruitsStr = fruits.some((x) => typeof x === "string");
console.log(fruitsStr);

const emails = ["test@example.com", "hello@domain.com", "user@site.org"];
const hasValidEmail = emails.some(
    (email) => email.includes("@") && email.includes(".")
);
