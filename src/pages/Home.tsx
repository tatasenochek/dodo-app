import { useEffect } from "react";
import { PAGE_SIZE, sortedParams } from "../constant/constant";
import { Categories } from "../components/Categories/Categories";
import { Sort } from "../components/Sort/Sort";
import { Title } from "../components/Title/Title";
import { PizzaList } from "../components/PizzaList/PizzaList";
import { PizzaItem } from "../components/PizzaItem/PizzaItem";
import { Loader } from "../components/PizzaItem/Loader";
import { Pagination } from "../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import {
	setActiveIndexCategory,
	setActiveIndexSort,
	setSortOrder,
} from "../store/slice/filterSlice";
import {
	fetchProducts,
	fetchProductsCount,
	setCurrentPage,
} from "../store/slice/productsSlice";

export function Home() {
	const { pizzas, status, pizzasCount, currentPage } = useSelector(
		(state: RootState) => state.products
	);
	const { activeIndexCategory, activeIndexSort, sortOrder, searchValue } =
		useSelector((state: RootState) => state.filter);
	const dispatch = useDispatch();
	const appDispatch = useAppDispatch();

	const category =
		activeIndexCategory == 0 ? "" : `?category=${activeIndexCategory}`;
	const sort = `${activeIndexCategory == 0 ? "?" : "&"}sortBy=${
		sortedParams[activeIndexSort].sortProperty
	}`;
	const sortASC = `${sort ? "&" : "?"}order=${sortOrder ? "asc" : "desc"}`;
	const filterName = `&filter=${searchValue}`;

	function handlerSorted() {
		dispatch(setSortOrder(!sortOrder));
	}

	async function getPizzasCount() {
		appDispatch(fetchProductsCount({ category, sort, sortASC, filterName }));
	}

	async function getPizzas() {
		appDispatch(
			fetchProducts({ category, sort, sortASC, filterName, currentPage })
		);
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
			dispatch(setCurrentPage(currentPage + 1));
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			dispatch(setCurrentPage(currentPage - 1));
		}
	};

	const pageCount = Math.ceil(pizzasCount / PAGE_SIZE);

	return (
		<>
			<div className="content__top">
				<Categories
					activeIndexCategory={activeIndexCategory}
					onclick={(i: number) => dispatch(setActiveIndexCategory(i))}
				/>
				<Sort
					activeIndexSort={activeIndexSort}
					onclick={(i: number) => dispatch(setActiveIndexSort(i))}
					handlerSorted={handlerSorted}
					sortOrder={sortOrder}
				/>
			</div>
			<Title>Все пиццы</Title>
			{status === "error" ? (
				<p className="error">К сожалению, такой пиццы у нас нет 😔</p>
			) : (
				<PizzaList>
					{status === "loading"
						? [...new Array(4)].map((_, index) => <Loader key={index} />)
						: pizzas.map((pizza) => <PizzaItem pizza={pizza} key={pizza.id} />)}
				</PizzaList>
			)}
			{pizzas.length > 0 && (
				<Pagination
					pageCount={pageCount}
					currentPage={currentPage}
					setCurrentPage={(i) => dispatch(setCurrentPage(i))}
					handlePrevPage={() => handlePrevPage()}
					handleNextPage={() => handleNextPage()}
				/>
			)}
		</>
	);
}
