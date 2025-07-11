async function createProduct() {
    try {
        const response = await fetch(
            "https://dev.wenivops.co.kr/services/fastapi-crud/1/product",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: 10,
                    productName: "[new] 개발 노트",
                    price: 15000,
                    stockCount: 10,
                    thumbnailImg: "",
                    option: [],
                    discountRate: 0,
                    shippingFee: 2500,
                    detailInfoImage: [],
                    viewCount: 100,
                    pubDate: new Date().toISOString(),
                    modDate: new Date().toISOString(),
                }),
            }
        );
        if (!response.ok) {
            throw new Error("상품 생성에 실패했습니다.");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("오류 발생", error);
    }
}
createProduct();
