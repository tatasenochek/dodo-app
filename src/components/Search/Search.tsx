import styles from "./search.module.scss";
import { SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../store/slice/filterSlice";
import { useDebounce } from "use-debounce";

export function Search() {
	const [value, setValue] = useState("");
	const searchValue = useSelector(
		(state: RootState) => state.filter.searchValue
	);
	const dispatch = useDispatch();
	const [debounce] = useDebounce(value, 1000);

	useEffect(() => {
		if (debounce.trim() === "") {
			dispatch(setSearchValue(""));
		}

		if (debounce !== searchValue) {
			dispatch(setSearchValue(debounce));
		}
	}, [debounce, dispatch, searchValue]);

	return (
		<label className={styles["search"]}>
			<SearchIcon className={styles["search__icon"]} />
			<input
				value={value}
				className={styles["search__input"]}
				type="search"
				placeholder="Поиск пиццы..."
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target.value)
				}
			/>
		</label>
	);
}
