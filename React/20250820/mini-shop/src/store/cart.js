// 액션 타입
export const AddCart = "ADD_CART";
export const DelCart = "DEL_CART";
export const ReSetCart = "ReSet";

// 액션 생성자
export const add = (product) => ({ type: AddCart, payload: product.id });
export const del = (product) => ({ type: DelCart, payload: product.id });
export const reset = () => ({ type: ReSetCart });

// 초기 상태
const initialState = {
    cartItems: [],
};

// Reducer
export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case AddCart:
            const exists = state.cartItems.some((item) => item.id === action.payload.id);
            if (exists) return state;

            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case DelCart:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item !== action.payload),
            };
        case ReSetCart:
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
}

export default counterReducer;
