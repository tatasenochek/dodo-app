import { SearchIcon } from "lucide-react";
import { ChangeEvent, useContext } from "react";
import { SearchContext } from "../../context/search.context";

export function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
	
  return (
		<label className="search">
			<SearchIcon className="search__icon" />
      <input
        value={searchValue}
				className="search__input"
				type="search"
        placeholder="Поиск пиццы..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
			/>
		</label>
	);
}
