// hello.ts
function greet(name: string): string {
    return `안녕하세요, ${name}님!`;
}

const message = greet("타입스크립트");
console.log(message);

// 타입 오류 예시 (주석 해제하면 오류 발생)
// console.log(greet(123));

// 2.1 기본 타입 지정하기
let userName: string = "김개발";
let userAge: number = 25;
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["typescript", 100];

//2.2 타입 추론 이해하기
let value: number | string = "Hello";
value = 42;
let numbers2: (number | string)[] = [1, 2, 3];
numbers2.push("4");
let mixed: (number | string | boolean)[] = [1, "two", 3];
mixed.push(true);

//2.3 void와 never 이해하기
function logMessage(message: string): void {
    console.log(message);
}
function throwError(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
        console.log("무한 루프");
    }
}
//2.4 변수 순회하기
const fruits: string[] = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
    console.log(fruit);
});
