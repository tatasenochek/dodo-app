import { useEffect, useState } from "react";
import { IPizza } from "../components/PizzaItem/types";
import axios from "axios";
import { sortedParams, url } from "../constant/constant";
import { Categories } from "../components/Categories/Categories";
import { Sort } from "../components/Sort/Sort";
import { Title } from "../components/Title/Title";
import { PizzaList } from "../components/PizzaList/PizzaList";
import { PizzaItem } from "../components/PizzaItem/PizzaItem";
import { Loader } from "../components/PizzaItem/Loader";

export function Home() {
	const [pizzas, setPizzas] = useState<IPizza[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const [activeIndexCategory, setActiveIndexCategory] = useState(0);
	const [activeIndexSort, setActiveIndexSort] = useState(0);
	const [sortOrder, setSortOrder] = useState(true);

	const category =
		activeIndexCategory == 0 ? "" : `?category=${activeIndexCategory}`;
	const sort = `${activeIndexCategory == 0 ? "?" : "&"}sortBy=${
		sortedParams[activeIndexSort].sortProperty
	}`;
	const sortASC = `${sort ? "&" : "?"}order=${sortOrder ? "asc" : "desc"}`;

	function handlerSorted() {
		setSortOrder(!sortOrder);
	}

	async function getPizzas() {
		setIsLoading(true);
		try {
			const res = await axios.get<IPizza[]>(`${url}${category}${sort}${sortASC}`);
			setPizzas(res.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getPizzas();
	}, [activeIndexCategory, activeIndexSort, sortOrder]);

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
			<PizzaList>
				{isLoading === true
					? [...new Array(4)].map((_, index) => <Loader key={index} />)
					: pizzas.map((pizza) => <PizzaItem pizza={pizza} key={pizza.id} />)}
			</PizzaList>
		</>
	);
}
