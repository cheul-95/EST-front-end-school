import type { Product } from "../types/index";

const BASE_URL = "https://dev.wenivops.co.kr/services/fastapi-crud/1/product";

export async function fetchAllProducts(): Promise<Product[]> {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const data: Product[] = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
