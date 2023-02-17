import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoCart from './cartSlice';
const reducer = combineReducers({
    cart: todoCart,
});
const store = configureStore({ reducer });

export default store;
