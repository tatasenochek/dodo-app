import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
	id: string;
	imageUrl: string;
	title: string;
	type: number;
	size: number;
	price: number;
	count: number;
}

interface ICartState {
	totalPrice: number;
	count: number;
	products: IProduct[];
}

const initialState: ICartState = {
	totalPrice: 0,
	count: 0,
	products: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<IProduct>) => {
			const isProduct = state.products.find(
				(p) =>
					p.id === action.payload.id &&
					p.type === action.payload.type &&
					p.size === action.payload.size
			);

			if (isProduct) {
				if (isProduct.count) {
					isProduct.count++;
				}
			} else {
				state.products.push({ ...action.payload, count: 1 });
			}
			state.count = state.products.reduce((acc, p) => p.count + acc, 0);
			state.totalPrice = state.products.reduce(
				(acc, p) => p.price * p.count + acc,
				0
			);
		},
		removeProduct: (state, action: PayloadAction<IProduct>) => {
			const isProduct = state.products.find(
				(p) =>
					p.id === action.payload.id &&
					p.type === action.payload.type &&
					p.size === action.payload.size
			);

			if (isProduct) {
				if (isProduct.count > 1) {
					isProduct.count--;
				}
			}

			state.count = state.products.reduce((acc, p) => p.count + acc, 0);
			state.totalPrice = state.products.reduce(
				(acc, p) => p.price * p.count + acc,
				0
			);
		},
		deleteProduct: (state, action: PayloadAction<IProduct>) => {
			state.products = state.products.filter(
				(p) =>
					!(
						p.id === action.payload.id &&
						p.type === action.payload.type &&
						p.size === action.payload.size
					)
			);

			state.count = state.products.reduce((acc, p) => p.count + acc, 0);
			state.totalPrice = state.products.reduce(
				(acc, p) => p.price * p.count + acc,
				0
			);
		},
		clearProducts: (state) => {
      state.products = [];
      state.count = 0;
      state.totalPrice = 0;
		},
	},
});

export const { addProduct, removeProduct, deleteProduct, clearProducts } =
	cartSlice.actions;
export default cartSlice.reducer;
