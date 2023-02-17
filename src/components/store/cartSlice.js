import { createSlice } from '@reduxjs/toolkit';
const local = localStorage.getItem('data2');
const memo = JSON.parse(local);

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        totalItem: 0,
        totalRice: 0,
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);

            const totalRice = state.items.reduce((initValue, total) => {
                return initValue + total.rice;
            }, 0);
            state.totalRice = totalRice;
            state.totalItem = state.items.length;

            const convert = JSON.stringify(state.items);
            localStorage.setItem('data2', convert);
        },
        removeItem(state, action) {
            const objIndex = state.items.findIndex((obj) => obj.id === action.payload.id);
            state.items.splice(objIndex, 1);
            const totalRice = state.items.reduce((initValue, total) => {
                return initValue + total.rice;
            }, 0);
            state.totalRice = totalRice;
            state.totalItem = state.items.length;

            const convert = JSON.stringify(state.items);
            localStorage.setItem('data2', convert);
        },
    },
});
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
