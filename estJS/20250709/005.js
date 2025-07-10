// 상품 ID를 통해 상품 상세 정보를 가져와 콘솔에 출력하세요!
// 요청 URL: https://dev.wenivops.co.kr/services/fastapi-crud/1/product/id
// 요청 방식: GET

function fetchProductById(id) {
    // 여기에 코드 작성
    fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`, {
        method: "GET",
    })
        .then((response) => {
            //JSON 파싱
            return response.json();
        })
        .then((json) => {
            // 파싱 결과를 사용
            console.log(json);
        })
        .catch((error) => {
            // 오류가 발생한 경우 처리
            console.error(error);
        });
}
fetchProductById(1);
