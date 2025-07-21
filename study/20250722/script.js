const $searchForm = document.querySelector("#search-form");
const $searchInput = document.querySelector("#search-input");
const VIDEO_URL = "https://dapi.kakao.com/v2/search/vclip";
const REST_API_KEY = "5cc91f5ec825ad954390d9af2de103ca";
const $videoList = document.querySelector("#vclip-list");
const target = document.querySelector("#observer-target");
let page = 1;
let isEnd = false;
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector("#loading").style.display = "block";
                searchVideo(false);
            }
        });
    },
    {
        root: null, // 뷰포트를 기준으로 감지
        rootMargin: "0px",
        threshold: 0, // 요소의 50%가 화면에 보일 때 콜백 실행
    }
);

$searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchVideo();
});

async function searchVideo(isNew = true) {
    const input = $searchInput.value.trim();
    if (isNew) {
        page = 1;
        isEnd = false;
        $videoList.innerHTML = "";
        keyword = $searchInput.value.trim();
        if (!keyword) {
            alert("검색어를 입력하세요");
            return;
        }
    }

    if (isEnd) return;

    try {
        // fetch를 사용해서 API 호출하기
        const params = {
            query: input,
            page: page,
        };
        const queryString = new URLSearchParams(params).toString();
        const fullUrl = `${VIDEO_URL}?${queryString}`;

        const response = await fetch(fullUrl, {
            method: "GET",
            headers: {
                Authorization: "KakaoAK " + REST_API_KEY,
            },
        });
        // 응답 상태 확인하기
        if (!response.ok) {
            throw new Error("해당 검색 항목에 오류가 발생하였습니다.");
        }
        // JSON 데이터로 변환하기
        const data = await response.json();
        // 결과가 없다면 '검색 결과가 없습니다.' 메시지 표시
        if (data.documents.length === 0) {
            $videoList.innerHTML = "<li>검색 결과가 없습니다.</li>";
            return;
        }
        renderVideo(data.documents);
        if (data.meta.is_end) {
            document.querySelector("#loading").style.display = "none";
            isEnd = true;
            observer.unobserve(target); // 더 이상 관찰 필요 없음
        } else {
            page++;
        }
    } catch (error) {
        // 에러 메시지 콘솔 및 화면에 표시하기
        console.log(error);
    }
    // 검색 결과를 화면에 표시하기
}
function renderVideo(videos) {
    // 책 정보를 화면에 표시
    videos.map((video) => {
        const li = document.createElement("li");
        const date = new Date(video.datetime);
        const pad = (n) => n.toString().padStart(2, "0");
        const formatted = `${date.getFullYear()}-${pad(
            date.getMonth() + 1
        )}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(
            date.getMinutes()
        )}`;
        li.innerHTML = `<a href="${video.url}">
                    <img src="${video.thumbnail}"/>
                    <img class="playButton"src="./youtube-icon.png" />
                    </a>
                    <div>
                    <h2>${video.title}</h2>
                    <p>${video.author}</p>
                    <p class="date">${formatted}</p>
                    </div>
                    `;
        $videoList.appendChild(li);
    });
    observer.observe(target);
}
