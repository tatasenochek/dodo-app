import { authSlice, initialState, setAuth } from "../slice/authSlice";
import { loadState } from "../storage";

jest.mock("../storage", () => ({
	loadState: jest.fn() as jest.MockedFunction<(key: string) => unknown>,
}));

describe("проверка authSlice", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it("инициализация состояния", () => {
		(
			loadState as jest.MockedFunction<(key: string) => unknown>
		).mockImplementation(() => ({ isAuth: false }));

		loadState("authData");

		expect(authSlice.getInitialState()).toEqual({ isAuth: false });
		expect(loadState).toHaveBeenCalledWith("authData");
	});

	it("изменение состояния авторизации", () => {
		const result = authSlice.reducer(
			{
				...initialState,
				isAuth: false,
			},
			setAuth()
		);

		expect(result.isAuth).toBe(true);
	});
});
