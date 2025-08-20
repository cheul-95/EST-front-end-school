import { useSelector, useDispatch } from "react-redux";
import { product_list } from "./shop.jsx";
import { reset, del } from "../store/cart"; // Add 액션을 import 해야 합니다

function Cart() {
    const cartItems = useSelector((state) => state.cartItems);
    const getProductDetails = (id) => product_list.find((item) => item.id === id);
    const dispatch = useDispatch(); // Hook을 컴포넌트 내부 최상단에서 호출
    function removeAllItems() {
        dispatch(reset());
    }
    function removeItems(product) {
        dispatch(del(product));
    }
    return (
        <>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>장바구니가 비었습니다.</p>
            ) : (
                <div>
                    <ul className="cart-items">
                        {cartItems.map((item) => {
                            const product = getProductDetails(item);
                            return (
                                <li key={product.id}>
                                    {product.name} - {product.price.toLocaleString()}원
                                    <button onClick={() => removeItems(product)}>Remove</button>
                                </li>
                            );
                        })}
                    </ul>
                    <span>
                        총{" "}
                        {cartItems
                            .reduce((total, item) => {
                                const product = getProductDetails(item);
                                return total + product.price;
                            }, 0)
                            .toLocaleString()}
                        원
                    </span>
                    <button className="all-remove" onClick={() => removeAllItems()}>
                        All Remove
                    </button>
                </div>
            )}
        </>
    );
}

export default Cart;
