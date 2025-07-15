const target = document.getElementById("target"); // 감시 대상

// 어떤 변화에 반응할지 설정
const config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
};
// => 필요한 옵션만 켜서 불필요한 감지 비용을 줄여야 합니다.

// element.classList.add("active")
// ul <- li
// textContent

// mutationsList: 감지된 변화들을 담은 배열
const callback = (mutationsList) => {
    for (const mutation of mutationsList) {
        // console.log(mutation);
        console.log("변화 타입:", mutation.type);
    }
};

const observer = new MutationObserver(callback);
observer.observe(target, config);

// =========== 변화 ===============
for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    target.appendChild(li);
}

target.classList.add("target");

// observer.disconnect();
