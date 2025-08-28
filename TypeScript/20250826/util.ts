interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}
//id 제외하는 interface를 만들어주세요.
type omitProduct = Omit<Product, "id">;
//모든 필드가 선택적이 되는 interface를 만들어주세요.
type partialProduct = Partial<Product>;
//id, name, price만 포함이 되는 interface를 만들어주세요.
type pickProduct = Pick<Product, "id" | "name" | "price">;

interface Product2 {
    id: number;
    name: string;
    price: number;
    description?: string;
    category?: string;
}
//모든 속성을 읽기 전용으로 만드는 Readonly<T> 구현
type PrdReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
type ReadonlyProd = PrdReadonly<Product2>;
//모든 속성을 필수로 만드는 Required<T> 구현
type PrdRequired<T> = {
    [P in keyof T]-?: T[P];
};
type RequiredProd = PrdRequired<Product2>;
