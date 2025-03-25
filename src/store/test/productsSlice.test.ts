import axios from "axios";
import { IPizza } from "../../components/PizzaItem/types";
import {
	fetchProductById,
	fetchProducts,
	fetchProductsCount,
	initialState,
	productsSlice,
	setCurrentPage,
} from "../slice/productsSlice";
import { PAGE_SIZE, url } from "../../constant/constant";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("проверка productsSlice", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const mockPizza: IPizza = {
		id: "1",
		title: "Маргарита",
		price: 500,
		imageUrl: "http://",
		types: [1, 2],
		sizes: [30, 40],
		category: 0,
		rating: 0,
		description: "pizza",
	};

	const mockPizzas: IPizza[] = [mockPizza, { ...mockPizza, id: "2" }];

	it("инициализация состояния", () => {
		expect(productsSlice.getInitialState()).toEqual(initialState);
	});

	it("изменение номера страницы setCurrentPage", () => {
		const state = productsSlice.reducer(initialState, setCurrentPage(2));
		expect(state.currentPage).toEqual(2);
	});

	describe("проверка fetchProducts", () => {
		it("начала запроса", () => {
			const state = productsSlice.reducer(initialState, {
				type: fetchProducts.pending.type,
			});
			expect(state.status).toBe("loading");
			expect(state.pizzas).toStrictEqual([]);
		});

		it("ошибка запроса", () => {
			const state = productsSlice.reducer(initialState, {
				type: fetchProducts.rejected.type,
			});

			expect(state.status).toBe("error");
			expect(state.pizzas).toStrictEqual([]);
		});

		it("успешное выполнение запроса", () => {
			const state = productsSlice.reducer(initialState, {
				type: fetchProducts.fulfilled.type,
				payload: mockPizzas,
			});

			expect(state.status).toBe("completed");
			expect(state.pizzas).toStrictEqual(mockPizzas);
		});
	});

	describe("проверка fetchProductById", () => {
		it("начала запроса", () => {
			const state = productsSlice.reducer(initialState, {
				type: fetchProductById.pending.type,
			});
			expect(state.status).toBe("loading");
			expect(state.pizza).toStrictEqual(null);
		});

		it("ошибка запроса", () => {
			const state = productsSlice.reducer(initialState, {
				type: fetchProductById.rejected.type,
			});

			expect(state.status).toBe("error");
			expect(state.pizza).toStrictEqual(null);
		});

		it("успешное выполнение запроса", () => {
			const state = productsSlice.reducer(initialState, {
				type: fetchProductById.fulfilled.type,
				payload: mockPizza,
			});

			expect(state.status).toBe("completed");
			expect(state.pizza).toStrictEqual(mockPizza);
		});
	});

	describe("проверка fetchProductsCount", () => {
		it("успешное выполнение запроса", () => {
			const state = productsSlice.reducer(initialState, {
				type: fetchProductsCount.fulfilled.type,
				payload: mockPizzas,
			});

			expect(state.status).toBe("completed");
			expect(state.pizzasCount).toStrictEqual(mockPizzas.length);
		});
	});

	describe("проверка асихронных запросов", () => {
		it("fetchProductById", async () => {
			mockedAxios.get.mockResolvedValue({ data: mockPizza });

			const result = await fetchProductById({ id: "1" })(
				jest.fn(),
				jest.fn(),
				{}
			);

			expect(mockedAxios.get).toHaveBeenCalledWith(`${url}/1`);
			expect(result.payload).toEqual(mockPizza);
		});

		it("fetchProducts", async () => {
			mockedAxios.get.mockResolvedValue({ data: mockPizzas });

			const result = await fetchProducts({
				category: "category=1",
				sort: "sortBy=rating",
				sortASC: "order=asc",
				filterName: "search=test",
				currentPage: 2,
			})(jest.fn(), jest.fn(), {});

			expect(mockedAxios.get).toHaveBeenCalledWith(
				`${url}category=1sortBy=ratingorder=ascsearch=test`,
				{
					params: {
						page: 2,
						limit: PAGE_SIZE,
					},
				}
			);
			expect(result.payload).toEqual(mockPizzas);
		});

		it("fetchProducts", async () => {
			mockedAxios.get.mockResolvedValue({ data: mockPizzas });

			const result = await fetchProductsCount({
				category: "category=1",
				sort: "sortBy=rating",
				sortASC: "order=asc",
				filterName: "search=test",
			})(jest.fn(), jest.fn(), {});

			expect(mockedAxios.get).toHaveBeenCalledWith(
				`${url}category=1sortBy=ratingorder=ascsearch=test`
			);
			expect(result.payload).toEqual(mockPizzas);
		});
	});
});
