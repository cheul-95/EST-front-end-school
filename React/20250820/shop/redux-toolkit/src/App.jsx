// src/App.jsx - RTK 버전
import { useDispatch } from "react-redux";
import { addExpense } from "./store";

function App() {
    const dispatch = useDispatch();

    const handleAddExpense = () => {
        const income = document.querySelector(".income").value;
        const itemName = document.querySelector(".itemName").value;
        const itemPrice = parseInt(document.querySelector(".itemPrice").value);

        if (itemName && !isNaN(itemPrice)) {
            dispatch(addExpense(income, { name: itemName, price: itemPrice }));
            console.log("지출 추가:", { name: itemName, price: itemPrice });
        }
    };

    return (
        <div>
            <h1>가계부</h1>
            <span>나의 수익 :</span>
            <input type="text" name="income" className="income" />
            <br />
            <span>물건 이름 :</span>
            <input type="text" name="itemName" className="itemName" />
            <br />
            <span>물건 가격 :</span>
            <input type="text" name="itemPrice" className="itemPrice" /> 
            <button onClick={handleAddExpense}>지출 추가하기</button>
            <br />
            <span>물건 리스트 </span>
            <ul>
                <li>
                    <article>
                        <span>이름 : test</span> / <span>가격 : price</span>
                    </article>
                </li>
            </ul>
            <span>총 지출 : </span>
            <span></span>
            <span>통장 잔고 지출 : </span>
            <span></span>
        </div>
    );
}

export default App;
