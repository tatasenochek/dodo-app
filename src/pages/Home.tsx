import { useContext, useEffect, useState } from "react";
import { IPizza } from "../components/PizzaItem/types";
import axios, { AxiosError } from "axios";
import { PAGE_SIZE, sortedParams, url } from "../constant/constant";
import { Categories } from "../components/Categories/Categories";
import { Sort } from "../components/Sort/Sort";
import { Title } from "../components/Title/Title";
import { PizzaList } from "../components/PizzaList/PizzaList";
import { PizzaItem } from "../components/PizzaItem/PizzaItem";
import { Loader } from "../components/PizzaItem/Loader";
import { SearchContext } from "../context/search.context";
import { Pagination } from "../components/Pagination/Pagination";

export function Home() {
	const [pizzas, setPizzas] = useState<IPizza[]>([]);
	const [pizzasCount, setPizzasCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | undefined>();
	const [currentPage, setCurrentPage] = useState(1);
	const [activeIndexCategory, setActiveIndexCategory] = useState(0);
	const [activeIndexSort, setActiveIndexSort] = useState(0);
	const [sortOrder, setSortOrder] = useState(true);
	const { searchValue } = useContext(SearchContext);

	const category =
		activeIndexCategory == 0 ? "" : `?category=${activeIndexCategory}`;
	const sort = `${activeIndexCategory == 0 ? "?" : "&"}sortBy=${
		sortedParams[activeIndexSort].sortProperty
	}`;
	const sortASC = `${sort ? "&" : "?"}order=${sortOrder ? "asc" : "desc"}`;
	const filterName = `&filter=${searchValue}`;

	function handlerSorted() {
		setSortOrder(!sortOrder);
	}

	async function getPizzasCount() {
		const res = await axios.get<IPizza[]>(`${url}`);
		setPizzasCount(res.data.length);
	}

	async function getPizzas() {
		setPizzas([]);
		setIsLoading(true);
		try {
			const res = await axios.get<IPizza[]>(
				`${url}${category}${sort}${sortASC}${filterName}`,
				{
					params: {
						page: currentPage,
						limit: PAGE_SIZE,
					},
				}
			);
			setPizzas(res.data);
			setError(undefined);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.message);
			}
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getPizzasCount();
		getPizzas();
	}, [
		activeIndexCategory,
		activeIndexSort,
		sortOrder,
		searchValue,
		currentPage,
	]);

	const handleNextPage = () => {
		if (currentPage < pageCount) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const pageCount = Math.ceil(pizzasCount / PAGE_SIZE);

	return (
		<>
			<div className="content__top">
				<Categories
					activeIndexCategory={activeIndexCategory}
					onclick={(i: number) => setActiveIndexCategory(i)}
				/>
				<Sort
					activeIndexSort={activeIndexSort}
					onclick={(i: number) => setActiveIndexSort(i)}
					handlerSorted={handlerSorted}
					sortOrder={sortOrder}
				/>
			</div>
			<Title>Все пиццы</Title>
			{error ? (
				<p className="error">К сожалению, такой пиццы у нас нет 😔</p>
			) : (
				<PizzaList>
					{isLoading === true
						? [...new Array(4)].map((_, index) => <Loader key={index} />)
						: pizzas.map((pizza) => <PizzaItem pizza={pizza} key={pizza.id} />)}
				</PizzaList>
			)}
			<Pagination
				pageCount={pageCount}
				currentPage={currentPage}
				setCurrentPage={(i) => setCurrentPage(i)}
				handlePrevPage={() => handlePrevPage()}
				handleNextPage={() => handleNextPage()}
			/>
		</>
	);
}
