import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { FILTER } from "./slice/filterSlice"
import cartReducer, { CART } from "./slice/cartSlice"
import productsReducer from "./slice/productsSlice";
import { useDispatch } from "react-redux";
import { saveState } from "./storage";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		cart: cartReducer,
		products: productsReducer,
	},
});

store.subscribe(() => {
	saveState(store.getState().filter, FILTER);
	saveState(store.getState().cart, CART);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
