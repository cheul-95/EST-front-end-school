// async, await
// async: 키워드를 붙이면 Promise 객체를 반환하는 함수
async function test() {
    return "Hello world";
    // return Promise.resolve("Hello World");
}

console.log(test());

// await: Promise가 처리될 때까지 기다린다!!
// 이 코드는 비동기 코드지만 한 줄씩 순차적으로 실행된다.
async function message() {
    console.log("1. 함수 시작");

    const hello = await new Promise((resolve) => {
        console.log("2. Promise 생성");
        setTimeout(() => {
            console.log("3. setTimeout 콜백 실행");
            resolve("hello");
        }, 1000);
    });

    // 함수 실행 재개
    console.log("4. hello 값 받음", hello);

    const world = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("world");
        }, 0);
    });

    // 함수 실행 재개
    console.log("5. world 값 받음", world);
    console.log(`6. ${hello} ${world}`);
}

message();

// console.log("message 함수 밑에 있어요!!");

/*
// promise로 작성했을 경우
function message() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("hello");
        }, 1000);
    }).then((hello) => {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${hello} world`);
        }, 1000);
        });
    }).then((result) => {
        console.log(result);
    });
}
message();
*/

async function getProduct() {
    try {
        const url =
            "https://dev.wenivops.co.kr/services/fastapi-crud/1/Product";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("상품 목록 조회 실패");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("오류 발생 :", error);
    }
}
getProduct();
