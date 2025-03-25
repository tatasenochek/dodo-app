import {
	filterSlice,
	initialState,
	setActiveIndexCategory,
  setActiveIndexSort,
  setSearchValue,
  setSortOrder,
} from "../slice/filterSlice";
import { loadState } from "../storage";

jest.mock("../storage", () => ({
	loadState: jest.fn() as jest.MockedFunction<(key: string) => unknown>,
}));

describe("проверка filterSlice", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it("инициализация состояния", () => {
		(
			loadState as jest.MockedFunction<(key: string) => unknown>
		).mockImplementation(() => ({
			activeIndexCategory: 0,
			activeIndexSort: 0,
			sortOrder: true,
			searchValue: "",
		}));

		loadState("filterData");

		expect(filterSlice.getInitialState()).toEqual({
			activeIndexCategory: 0,
			activeIndexSort: 0,
			sortOrder: true,
			searchValue: "",
		});
		expect(loadState).toHaveBeenCalledWith("filterData");
	});

	it("изменение состояния setActiveIndexCategory", () => {
		const result = filterSlice.reducer(
			{
				...initialState,
				activeIndexCategory: 1,
			},
			setActiveIndexCategory(1)
		);

		expect(result.activeIndexCategory).toBe(1);
	});

	it("изменение состояния setActiveIndexSort", () => {
		const result = filterSlice.reducer(
			{
				...initialState,
				activeIndexSort: 1,
			},
			setActiveIndexSort(1)
		);

		expect(result.activeIndexSort).toBe(1);
	});

	it("изменение состояния setSortOrder", () => {
		const result = filterSlice.reducer(
			{
				...initialState,
				sortOrder: true,
			},
			setSortOrder(false)
		);

		expect(result.sortOrder).toBe(false);
	});

	it("изменение состояния setSearchValue", () => {
		const result = filterSlice.reducer(
			{
				...initialState,
				searchValue: "",
			},
			setSearchValue("пепперони")
		);

		expect(result.searchValue).toBe("пепперони");
	});
});
