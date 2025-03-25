import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../slice/filterSlice";
import cartReducer from "../slice/cartSlice";
import productsReducer from "../slice/productsSlice";
import authReducer from "../slice/authSlice";
import { store } from "../store";
import { saveState } from "../storage";

jest.mock("../storage", () => ({
	loadState: jest.fn().mockReturnValue(undefined),
	saveState: jest.fn(),
}));

describe("проверка store", () => {
	describe("проверка configureStore", () => {
		it("создание редюсеров", () => {
			const store = configureStore({
				reducer: {
					filter: filterReducer,
					cart: cartReducer,
					products: productsReducer,
					auth: authReducer,
				},
			});

			expect(typeof store.getState).toBe("function");
			expect(typeof store.dispatch).toBe("function");
		});
	});

	describe("проверка subscribe", () => {
		global.localStorage = {
			getItem: jest.fn(),
			setItem: jest.fn(),
			removeItem: jest.fn(),
			clear: jest.fn(),
			key: jest.fn(),
			length: 0,
		};

		jest.mock("../storage", () => ({
			saveState: jest.fn(),
		}));

		it("сохранение при изменении состояния", () => {
    store.dispatch({ type: "filter/setFilter", payload: "new-filter" });

		expect(saveState).toHaveBeenCalledTimes(3);
		expect(saveState).toHaveBeenLastCalledWith({ isAuth: false }, "authData");
		});
	});
});
