import axios, { AxiosError } from "axios";
import clsx from "clsx";
import { ChevronLeft, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { IPizza } from "../components/PizzaItem/types";
import { typePizza, url } from "../constant/constant";
import { Link, useParams } from "react-router-dom";

export function Product() {
	const [pizzaType, setPizzaType] = useState(0);
	const [pizzaSize, setPizzaSize] = useState(0);
	const [count, setCount] = useState(0);
	const [pizza, setPizza] = useState<IPizza>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | undefined>();
	const { id } = useParams();

	async function getPizza() {
		setIsLoading(true);
		try {
			const res = await axios.get<IPizza>(`${url}/${id}`);
			setPizza(res.data);
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
		getPizza();
	}, []);

	return (
		<div className="product">
			<Link to="/" className="product__link">
				<ChevronLeft />
				Назад
			</Link>
			<img
				className="product__image"
				src={pizza?.imageUrl}
				alt={pizza?.title}
			/>
			<div className="product__info">
				<h4 className="product__title">{pizza?.title}</h4>
				<p>{pizza?.description}</p>
				<div className="product__selector">
					<ul>
						{pizza?.types.map((i, index) => (
							<li
								key={index}
								onClick={() => setPizzaType(index)}
								className={clsx(`${pizzaType === index ? "active" : ""}`)}
							>
								{typePizza[i]}
							</li>
						))}
					</ul>
					<ul>
						{pizza?.sizes.map((item, index) => (
							<li
								key={index}
								onClick={() => setPizzaSize(index)}
								className={clsx(`${pizzaSize === index ? "active" : ""}`)}
							>
								{item} см.
							</li>
						))}
					</ul>
				</div>
				<div className="product__bottom">
					<div className="product__price">от {pizza?.price} ₽</div>
					<button
						className="button card-button"
						onClick={() => setCount(count + 1)}
					>
						<Plus size={16} />
						<span className="card-button__text">Добавить</span>
						<span
							className={clsx(
								`${count === 0 ? "hidden" : "card-button__count"}`
							)}
						>
							{count}
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
