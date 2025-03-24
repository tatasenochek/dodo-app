import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../storage";

export const AUTH = "authData";

interface IAuthState {
	isAuth: boolean;
}

const initialState: IAuthState = loadState<IAuthState>(AUTH) ?? {
	isAuth: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth: (state) => {
			state.isAuth = !state.isAuth;
		},
	},
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
