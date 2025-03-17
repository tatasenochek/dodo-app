import { useEffect, useState } from "react";
import { IPizza } from "../components/PizzaItem/types";
import axios from "axios";
import { url } from "../constant/constant";
import { Categories } from "../components/Categories/Categories";
import { Sort } from "../components/Sort/Sort";
import { Title } from "../components/Title/Title";
import { PizzaList } from "../components/PizzaList/PizzaList";
import { PizzaItem } from "../components/PizzaItem/PizzaItem";
import { Loader } from "../components/PizzaItem/Loader";

export function Home() {
	const [pizzas, setPizzas] = useState<IPizza[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	async function getPizzas() {
		setIsLoading(true);
		try {
			const res = await axios.get<IPizza[]>(url);
			setPizzas(res.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getPizzas();
	}, []);

	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
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
