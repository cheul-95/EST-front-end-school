// 지금은 useContext를 사용하는 것이 더 복잡성을 올립니다.
// 다만 복잡도가 증가했을 때에는 useContext를 사용하는 것이 좋습니다.

import { useContext, useState, useEffect, createContext } from "react";

const MyContext = createContext();
const MyContext2 = createContext();

const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
];

function App() {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }
    function removeFromCart(productId) {
        const newCart = cart.filter((item) => item.id !== productId);
        setCart(newCart);
    }

    return (
        <>
            <MyContext.Provider value={{ products, addToCart }}>
                <h1>My React App</h1>
                <ProductList />
            </MyContext.Provider>
            <MyContext2.Provider value={{ cart, removeFromCart }}>
                <Cart />
            </MyContext2.Provider>
        </>
    );
}

function ProductList() {
    const { products, addToCart } = useContext(MyContext);

    return (
        <div>
            <h2>Product List</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

function Cart() {
    const { cart, removeFromCart } = useContext(MyContext2);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default App;
