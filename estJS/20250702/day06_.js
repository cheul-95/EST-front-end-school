/**
 * 심화 1번
 */
const obj = { a: 1, b: { c: 2 } };
const objCopy = JSON.parse(JSON.stringify(obj));
console.log("심화 1번 : json 이라 콘솔 불가");
/**
 * 심화 2번
 */
const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };
const obja = Object.keys(a);
const objb = Object.keys(b);
const result = obja.every((k) => a[k] === b[k]);
console.log("심화 2번 :", result);
/**
 * 심화 3번
 */
const user = { _age: 20 };
const getter = Object.defineProperty(user, "age", {
    get() {
        return `${user._age} 입니다.`;
    },
    set(value) {
        if (typeof value === "number" && value > 0 && value <= 120) {
            user._age = value;
        } else {
            console.log("심화 3번 : 유효 숫자를 입력해주세요!");
        }
    },
});
user.age = 130;
console.log("심화 3번 :", user.age);
/**
 * 심화 4번
 */
const person = { name: "Ghost" };
const sayHello = () => {
    return `Hello! ${person.name}`;
};
person.sayHello = sayHello();
console.log("심화 4번 :", person.sayHello);
/**
 * 심화 5번
 */
function User(name, age) {
    this.name = name;
    this.age = age;
}
const ghostMan = new User("Ghost", 20);
console.log("심화 5번 :", ghostMan.name, ghostMan.age);
/**
 * 심화 6번
 */
function User2(name) {
    this.name = name;
}
const u = new User2("Ghost");
User2.prototype.sayHello = () => {
    return `Hello ${this.name}`;
};
console.log("심화 6번 :", u);
/**
 * 심화 7번
 */
let obj2 = { b: 2, a: 1, c: 3 };
obj2 = Object.fromEntries(Object.entries(obj2).sort((a, b) => a[1] - b[1]));
console.log("심화 7번 :", obj2);
/**
 * 심화 8번
 */
const user2 = { name: "Ghost", age: 20 };
const user2copy = { ...user2 };
user2copy.age = 25;
console.log("심화 8번 :", user2, user2copy);
/**
 * 심화 9번
 */
const obj3 = { a: true, b: true, c: true };
const bloodType = Object.values(obj3).every((x) => x === true);
console.log("심화 9번 :", bloodType);
/**
 * 심화 10번
 */
const obj4 = { a: 1, b: 2 };
const temp = Object.entries(obj4).reduce((temp2, [key, value]) => {
    temp2[value] = key;
    return temp2;
}, {});
console.log("심화 10번 :", temp);
/**
 * 고급 1번
 */
const person1 = { name: "Ghost", age: 20 };
const { name, age } = person1;
console.log("고급 1번 :", name, age);
/**
 * 고급 2번
 */
const sym = Symbol("id"); // 심볼 생성
const obj5 = {}; // 빈 객체 생성
obj[sym] = 123; // 심볼을 키로 값 할당
console.log("고급 2번 :", obj[sym]);
/**
 * 고급 3번
 */
const obj6 = { a: 1 };
Object.freeze(obj6);
obj6.a = 2;
console.log("고급 3번 :", obj6);
/**
 * 고급 4번
 */
const obj7 = { a: 1, b: 2 };
console.log("고급 4번 ");
Object.keys(obj7).map((x) => console.log(x));
/**
 * 고급 5번
 */
const obj8 = { a: 1, b: 2, c: 3 };
const result2 = Object.keys(obj8)
    .filter((key) => obj8[key] >= 2)
    .map((key) => key);
console.log("고급 5번 ", result2);
/**
 * 고급 6번
 */
const obj9 = { a: 1, b: 2 };
const result3 = Object.values(obj9).map((value) => value * 2);
console.log("고급 6번 ", result3);
/**
 * 고급 7번
 */
const obj10 = { a: 1, b: 2, c: 3 };
const result4 = Object.entries(obj10)
    .filter(([key]) => {
        return key !== "b";
    })
    .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
console.log("고급 7번 ", result4);
/**
 * 고급 8번
 */
const obj11 = { a: 1, b: 2 };
const result5 = Object.entries(obj11);
console.log("고급 8번 ", result5);
/**
 * 고급 9번
 */
const obj12 = { a: 2, b: 4, c: 5 };
const result6 = Object.entries(obj12).every(([key, value]) => !(value % 2));
console.log("고급 9번 ", result6);
/**
 * 고급 10번
 */
const obj13 = { a: 1, b: true, c: null };
const result7 = Object.entries(obj13).reduce((acc, [key, value]) => {
    acc[String(key)] = String(value);
    return acc;
}, {});
console.log("고급 10번 ", result7);
