import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice"
import cartReducer from "./slice/cartSlice"
import productsReducer from "./slice/productsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		cart: cartReducer,
		products: productsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
