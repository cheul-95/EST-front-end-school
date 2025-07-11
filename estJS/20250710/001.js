// ""
const blogList = document.querySelector("#blogList");

// 1. 렌더링
function renderingBlog(data) {
    // 여기에 작성
    blogList.innerHTML = "";
    data.forEach((item) => {
        const li = document.createElement("li");
        const h2 = `<h2>${item.title}</h2>`;
        const strong = `<strong>작성자 : ${item.author}</strong>`;
        const time = `<time datetime=${item.date}>${item.date}</time>`;
        const p = `<p>조회수: ${item.views_count}</p>`;
        const li_inner = h2 + strong + time + p;
        li.innerHTML = li_inner;
        blogList.appendChild(li);
    });
}

// 2. 블로그 목록 조회
function fetchBlog() {
    // 여기에 작성
    fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/blog")
        .then((response) => {
            if (!response.ok) {
                throw new Error("정보를 가져오지 못했습니다.");
            }
            return response.json();
        })
        .then((json) => {
            // 파싱 결과를 사용
            renderingBlog(json);
        })
        .catch((error) => {
            // 오류가 발생한 경우 처리
            console.error(error);
        });
}

fetchBlog();
