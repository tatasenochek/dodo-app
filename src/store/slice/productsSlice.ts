import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../../components/PizzaItem/types";
import axios from "axios";
import { PAGE_SIZE, url } from "../../constant/constant";

enum Status {
	LOADING = "loading",
	SUCCESS = "completed",
	ERROR = "error",
}

interface IProductsState {
	pizzas: IPizza[];
	pizza: IPizza | null;
	pizzasCount: number;
	status: Status;
	currentPage: number;
}

export const fetchProductById = createAsyncThunk<
	IPizza,
	{
		id: string | undefined;
	}
>("products/fetchProductById", async ({ id }) => {
	const { data } = await axios.get<IPizza>(`${url}/${id}`);
	return data;
});

export const fetchProducts = createAsyncThunk<
	IPizza[],
	{
		category: string;
		sort: string;
		sortASC: string;
		filterName: string;
		currentPage: number;
	}
>(
	"products/fetchProducts",
	async ({ category, sort, sortASC, filterName, currentPage }) => {
		const { data } = await axios.get(
			`${url}${category}${sort}${sortASC}${filterName}`,
			{
				params: {
					page: currentPage,
					limit: PAGE_SIZE,
				},
			}
		);
		return data;
	}
);

export const fetchProductsCount = createAsyncThunk<
	IPizza[],
	{
		category: string;
		sort: string;
		sortASC: string;
		filterName: string;
	}
>(
	"products/fetchProductsCount",
	async ({ category, sort, sortASC, filterName }) => {
		const { data } = await axios.get(
			`${url}${category}${sort}${sortASC}${filterName}`
		);
		return data;
	}
);

export const initialState: IProductsState = {
	pizzas: [],
	pizza: null,
	pizzasCount: 0,
	status: Status.LOADING,
	currentPage: 1,
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProductById.pending, (state) => {
			state.status = Status.LOADING;
			state.pizza = null;
		});

		builder.addCase(
			fetchProductById.fulfilled,
			(state, action: PayloadAction<IPizza>) => {
				state.status = Status.SUCCESS;
				state.pizza = action.payload;
			}
		);

		builder.addCase(fetchProductById.rejected, (state) => {
			state.status = Status.ERROR;
			state.pizza = null;
		});

		builder.addCase(fetchProducts.pending, (state) => {
			state.status = Status.LOADING;
			state.pizzas = [];
		});

		builder.addCase(
			fetchProducts.fulfilled,
			(state, action: PayloadAction<IPizza[]>) => {
				state.status = Status.SUCCESS;
				state.pizzas = action.payload;
			}
		);

		builder.addCase(fetchProducts.rejected, (state) => {
			state.status = Status.ERROR;
			state.pizzas = [];
		});

		builder.addCase(
			fetchProductsCount.fulfilled,
			(state, action: PayloadAction<IPizza[]>) => {
				state.status = Status.SUCCESS
				state.pizzasCount = action.payload.length;
			}
		);
	},
});

export const { setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;
