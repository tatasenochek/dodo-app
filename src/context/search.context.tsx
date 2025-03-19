import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ISearchContext {
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext>({
	searchValue: "",
	setSearchValue: () => {},
});

export function SearchContextProvider({ children }: { children: React.ReactNode }) {
	const [searchValue, setSearchValue] = useState("");

	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			{children}
		</SearchContext.Provider>
	);
}