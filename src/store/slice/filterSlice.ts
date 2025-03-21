import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
	activeIndexCategory: number;
	activeIndexSort: number;
  sortOrder: boolean;
  searchValue: string;
}

const initialState: IFilterState = {
	activeIndexCategory: 0,
	activeIndexSort: 0,
  sortOrder: true,
  searchValue: "",
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setActiveIndexCategory: (state, action: PayloadAction<number>) => {
			state.activeIndexCategory = action.payload;
		},
		setActiveIndexSort: (state, action: PayloadAction<number>) => {
			state.activeIndexSort = action.payload;
		},
		setSortOrder: (state, action: PayloadAction<boolean>) => {
			state.sortOrder = action.payload;
		},
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
	},
});

export const { setActiveIndexCategory, setActiveIndexSort, setSortOrder, setSearchValue } =
	filterSlice.actions;
export default filterSlice.reducer;
