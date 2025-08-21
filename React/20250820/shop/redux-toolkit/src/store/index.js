// src/store/index.js - Redux Toolkit 방식
import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice로 액션과 리듀서를 한 번에 생성
const shopSlice = createSlice({
    name: "shop",
    initialState: {
        product: [],
    },
    reducers: {
        addExpense: (state, action) => {
            // const { income, item } = action.payload;
            // state.product.push({ ...item, income });
        },
    },
});

// 액션 생성자들을 자동으로 생성해줌
export const { addExpense } = shopSlice.actions;

// configureStore로 스토어 생성 (Redux DevTools 자동 설정됨)
const store = configureStore({
    reducer: {
        shop: shopSlice.reducer,
    },
});

export default store;
