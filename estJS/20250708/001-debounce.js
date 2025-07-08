// 디바운싱: 일정 시간 동안 추가 입력이 없을 때 한 번만 실행
// => 마지막 입력 후 일정 시간이 지나면 실행
// 예) 검색창에 입력할 때 타이핑 멈춘 후에만 검색 실행하고 싶을 때, 또는 유효성 검사

// 입력이 멈춘 후에! func 실행
// => 마지막 입력으로부터 delay 시간이 지나야 실행이 된다!
function debounce(func, delay) {
    let timer; // 타이머 ID를 저장하는 변수 => 타이머 취소할 때 사용!

    // args: 인자들이 담긴 배열
    return function (...args) {
        // 1. 기존 타이머 취소
        clearTimeout(timer);

        // 2. 새로운 타이머 등록, 시작
        timer = setTimeout(() => {
            func(...args); // handleInput
        }, delay);
        // => 새로운 타이머를 설정해서, 입력이 지속되지 않으면 delay 시간 후 func()을 실행
        // => delay 시간이 지나기 전에 또 입력이 들어오면 다시 함수가 호출되면서 clearTimeout으로 타이머 취소
    };
}

function handleInput(keyword) {
    console.log("검색어: ", keyword);
    // 실제로는 검색 요청을 하는 로직
}

const debouncedSearch = debounce(handleInput, 1000);

document.querySelector("#searchInput").addEventListener("input", (event) => {
    debouncedSearch(event.target.value);
});

/* 디바운스
apple, 1초
a 입력 -> 타이머1 시작 (1초 후 실행 예정)
p 입력 -> 타이머1 취소, 타이머2 시작
p 입력 -> 타이머2 취소, 타이머3 시작
l 입력 -> 타이머3 취소, 타이머4 시작
e 입력 -> 타이머4 취소, 타이머5 시작
.... 1초 동안 입력 없음
타이머5 완료 => 검색 함수 실행/ 검색 요청이 된다!!
=> 사용자가 apple 이라는 검색어를 모두 입력하고 1초 동안 멈춘 후에야 검색이 실행된다!!
*/

// 디바운스 처리를 하지 않았다면?!
// a => 요청
// p => 요청
// p => 요청
// ...
// => 입력을 할 때마다 계속 검색 요청을 하게 됩니다! 심지어 오타까지도..!!

/*
- "마지막 입력 기준"으로 동작 => 'input' 동작
- 연속 입력 중에는 실행되지않음
- 입력이 완전히 멈춘 후에만 실행
=> 불필요한 중간 요청/실행을 차단하기 위함!
*/
