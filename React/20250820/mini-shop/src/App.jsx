import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/shop.jsx";
import Cart from "./pages/Cart.jsx";
import { useSelector } from "react-redux";

function App() {
    const cartItems = useSelector((state) => state.cartItems);
    const header = (
        <header>
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart ({cartItems.length})</Link>
        </header>
    );

    return (
        <>
            <BrowserRouter>
                {header}
                <main>
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
