// src/store/index.js
// createStore에 줄이 쳐집니다.
// 다만 교육용으로는 createStore가 좋다 판단해 사용하도록 하겠습니다.
import { createStore } from "redux";
import counterReducer from "./cart.js"; // cart.js에서 리듀서를 가져옵니다
// Store 생성
export const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
