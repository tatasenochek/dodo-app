import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { FILTER } from "./slice/filterSlice"
import cartReducer, { CART } from "./slice/cartSlice"
import productsReducer from "./slice/productsSlice";
import authReducer, { AUTH } from "./slice/authSlice"
import { useDispatch } from "react-redux";
import { saveState } from "./storage";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		cart: cartReducer,
		products: productsReducer,
		auth: authReducer,
	},
});

store.subscribe(() => {
	saveState(store.getState().filter, FILTER);
	saveState(store.getState().cart, CART);
	saveState(store.getState().auth, AUTH);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
