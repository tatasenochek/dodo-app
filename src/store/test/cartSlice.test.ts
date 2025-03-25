import {
	addProduct,
	CART,
	cartSlice,
	clearProducts,
	deleteProduct,
	initialState,
	IProduct,
	removeProduct,
} from "../slice/cartSlice";
import { loadState } from "../storage";

jest.mock("../storage", () => ({
	loadState: jest.fn() as jest.MockedFunction<(key: string) => unknown>,
}));

const mockProduct: IProduct = {
	id: "1",
	imageUrl: "https//",
	title: "string",
	type: 1,
	size: 1,
	price: 100,
	count: 1,
};

const mockProductOtherType: IProduct = {
	id: "1",
	imageUrl: "https//",
	title: "string",
	type: 2,
	size: 1,
	price: 100,
	count: 1,
};

const mockProductOtherId: IProduct = {
	id: "2",
	imageUrl: "https//",
	title: "string",
	type: 1,
	size: 1,
	price: 100,
	count: 1,
};

const mockProductOtherSize: IProduct = {
	id: "1",
	imageUrl: "https//",
	title: "string",
	type: 1,
	size: 2,
	price: 100,
	count: 1,
};

describe("проверка cartSlice", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it("инициализация состояния без localStorage", () => {
		expect(cartSlice.getInitialState()).toEqual(initialState);
	});

	it("инициализация состояния с пустого localStorage", () => {
		(
			loadState as jest.MockedFunction<(key: string) => null>
		).mockImplementation(() => null);

		expect(loadState(CART)).toEqual(null);
		expect(cartSlice.getInitialState()).toStrictEqual(initialState);
		expect(loadState).toHaveBeenCalledWith(CART);
	});

  it("инициализация состояния с сохраненными данными из localStorage", () => {
    const savedState = {
			totalPrice: 100,
			count: 1,
			products: [mockProduct],
		};
      
    (
			loadState as jest.MockedFunction<(key: string) => unknown>
    ).mockImplementationOnce(() => (savedState));
    
		expect(loadState(CART)).toStrictEqual(savedState);
		expect(loadState).toHaveBeenCalledWith(CART);
	});

	it("добавление продукта addProduct", () => {
		const result = cartSlice.reducer(
			{
				...initialState,
				products: [],
				totalPrice: 0,
				count: 1,
			},
			addProduct(mockProduct)
		);

		expect(result.products).toStrictEqual([mockProduct]);
		expect(result.totalPrice).toBe(100);
		expect(result.count).toBe(1);
	});

	it("добавление продукта с другим типом addProduct", () => {
		const result = cartSlice.reducer(
			{
				...initialState,
				products: [mockProduct],
				count: 1,
				totalPrice: 100,
			},
			addProduct(mockProductOtherType)
		);

		expect(result.products).toStrictEqual([
			mockProduct,
			{ ...mockProduct, type: 2 },
		]);
		expect(result.totalPrice).toBe(200);
		expect(result.count).toBe(2);
	});

	it("добавление продукта с другим id addProduct", () => {
		const result = cartSlice.reducer(
			{
				...initialState,
				products: [mockProduct],
				count: 1,
				totalPrice: 100,
			},
			addProduct(mockProductOtherId)
		);

		expect(result.products).toStrictEqual([
			mockProduct,
			{ ...mockProduct, id: "2" },
		]);
		expect(result.totalPrice).toBe(200);
		expect(result.count).toBe(2);
	});

	it("добавление продукта с другим размером addProduct", () => {
		const result = cartSlice.reducer(
			{
				...initialState,
				products: [mockProduct],
				count: 1,
				totalPrice: 100,
			},
			addProduct(mockProductOtherSize)
		);

		expect(result.products).toStrictEqual([
			mockProduct,
			{ ...mockProduct, size: 2 },
		]);
		expect(result.totalPrice).toBe(200);
		expect(result.count).toBe(2);
	});

	it("увеличение продуктов в корзине addProduct", () => {
		const result = cartSlice.reducer(
			{
				...initialState,
				products: [mockProduct],
				count: 1,
				totalPrice: 100,
			},
			addProduct(mockProduct)
		);

		expect(result.products).toStrictEqual([{ ...mockProduct, count: 2 }]);
		expect(result.totalPrice).toBe(200);
		expect(result.count).toBe(2);
	});

	it("удаление одного продукта removeProduct", () => {
		const result = cartSlice.reducer(
			{
				...initialState,
				products: [{ ...mockProduct, count: 2 }],
			},
			removeProduct(mockProduct)
		);

		expect(result.products).toStrictEqual([mockProduct]);
		expect(result.totalPrice).toBe(100);
		expect(result.count).toBe(1);
	});

	it("удаление продукта deleteProduct", () => {
		const result = cartSlice.reducer(
			{
				...initialState,
				products: [{ ...mockProduct, count: 2 }],
				totalPrice: 200,
				count: 2,
			},
			deleteProduct(mockProduct)
		);

		expect(result.products).toStrictEqual([]);
		expect(result.totalPrice).toBe(0);
		expect(result.count).toBe(0);
	});

	it("удаление всех продуктов из корзины clearProducts", () => {
		const result = cartSlice.reducer(
			{
				...initialState,
				products: [mockProduct],
				totalPrice: 100,
				count: 1,
			},
			clearProducts()
		);

		expect(result.products).toStrictEqual([]);
		expect(result.totalPrice).toBe(0);
		expect(result.count).toBe(0);
	});
});
