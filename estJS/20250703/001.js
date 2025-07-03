//1
const person = (name, age) => {
    return `${name}님 나이는 ${age} 세 입니다.`;
};
console.log(person("Ghost", 1000));
//2
const addFun = (a, b = 10) => {
    return a + b;
};
console.log(addFun(1000, 5));
console.log(addFun(1000));
//3
const number = (a, b) => {
    return [a, b];
};
console.log(number(10, 20));
//4
const person2 = (a, b) => ({ name: a, age: b });
console.log(person2("Ghost", 1000));

//5
const getAge = (year) => {
    const date = new Date();
    return date.getFullYear() - year;
};
console.log(getAge(1979));
//6
const gugudan = (num) => {
    if (!(num >= 2 && num <= 9)) {
        return "2~9단만 입력 가능합니다.";
    }
    let result = "";
    for (let i = 1; i < 10; i++) {
        result += `${num}*${i}=${num * i}\n`;
    }
    return result;
};
console.log(gugudan(1));
//7
const arr = [10, 20, 30, 40];
const number2 = (a, b, ...c) => ({ first: a, sec: b, third: c });
console.log(number2(...arr));
//8
const user = { id: 1, name: "Ghost", age: 1000, email: "ghost@gmail.com" };
const { name: userName, email } = user;
console.log(userName, email);
//9
const users = [
    { name: "ghost", age: 1000 },
    { name: "irangi", age: 500 },
    { name: "nuvis", age: 30 },
];
const stringUsers = JSON.stringify(user);
const objectUsers = JSON.parse(stringUsers);

console.log(objectUsers, typeof objectUsers);
