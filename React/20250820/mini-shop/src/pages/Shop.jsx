import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/cart"; // Add 액션을 import 해야 합니다

export const product_list = [
    { id: 1, name: "Keyboard", price: 49000 },
    { id: 2, name: "Mouse", price: 29000 },
    { id: 3, name: "Monitor", price: 199000 },
];

function Shop() {
    const dispatch = useDispatch(); // Hook을 컴포넌트 내부 최상단에서 호출
    const cartItems = useSelector((state) => state.cartItems);
    const inCart = (productId) => cartItems.includes(productId);
    const handleAdd = (product) => {
        dispatch(add(product));
    };

    return (
        <>
            <h2>Shop</h2>
            <section className="product-list">
                <ul>
                    {product_list.map((product) => (
                        <li>
                            <article key={product.id}>
                                <h3>{product.name}</h3>
                                <span>{product.price.toLocaleString()}원</span>
                                {!inCart(product.id) ? (
                                    <button onClick={() => handleAdd(product)}>장바구니에 담기</button>
                                ) : (
                                    <button disabled>담기</button>
                                )}
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Shop;
