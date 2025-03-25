import { loadState, saveState } from "../storage";

global.localStorage = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	removeItem: jest.fn(),
	clear: jest.fn(),
	key: jest.fn(),
	length: 0,
};

describe("проверка storage", () => {
	describe("проверка loadState", () => {
		it("если значения нет в localStorage", () => {
			(
				global.localStorage.getItem as jest.MockedFunction<
					(key: string) => string | null
				>
			).mockReturnValue(null);

			const result = loadState<string>("key");

			expect(result).toBeUndefined();
			expect(global.localStorage.getItem).toHaveBeenCalledWith("key");
		});

		it("если значение есть в localStorage", () => {
			(
				global.localStorage.getItem as jest.MockedFunction<
					(key: string) => string | null
				>
			).mockReturnValue(JSON.stringify({ key: "value" }));

			const result = loadState<{ key: string }>("key");

			expect(result).toEqual({ key: "value" });
			expect(global.localStorage.getItem).toHaveBeenCalledWith("key");
		});

		it("если значение не удается распарсить", () => {
			(
				global.localStorage.getItem as jest.MockedFunction<
					(key: string) => string | null
				>
			).mockReturnValue("{ invalid json }");

			const result = loadState<{ key: string }>("key");

			expect(result).toBeUndefined();
			expect(global.localStorage.getItem).toHaveBeenCalledWith("key");
		});
	});

	describe("проверка saveState", () => {
		it("сохранение значения в localStorage", () => {
			saveState({ key: "value" }, "key");

			expect(global.localStorage.setItem).toHaveBeenCalledWith(
				"key",
				JSON.stringify({ key: "value" })
			);
		});
	});
});
