import { Info, Plus } from "lucide-react";
import { IPizzaItems } from "./types";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { typePizza } from "../../constant/constant";
import { useDispatch } from "react-redux";
import {
	addProduct,
	IProduct,
} from "../../store/slice/cartSlice";

export function PizzaItem({ pizza }: IPizzaItems) {
	const [pizzaType, setPizzaType] = useState(0);
	const [pizzaSize, setPizzaSize] = useState(0);

	const dispatch = useDispatch();

	function handlerAddProduct() {
		const addPizza: IProduct = {
			id: pizza.id,
			imageUrl: pizza.imageUrl,
			title: pizza.title,
			type: pizzaType,
			size: pizza.sizes[pizzaSize],
			price: pizza.price,
			count: 1,
		};
		dispatch(addProduct(addPizza));
	}

	return (
		<div className="pizza-block">
			<Link
				title="Подробнее о пицце"
				to={`/product/${pizza.id}`}
				className="pizza-block__info"
			>
				<Info />
			</Link>
			<img
				className="pizza-block__image"
				src={pizza.imageUrl}
				alt={pizza.title}
			/>
			<h4 className="pizza-block__title">{pizza.title}</h4>

			<div className="pizza-block__selector">
				<ul>
					{pizza.types.map((i, index) => (
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
					{pizza.sizes.map((item, index) => (
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
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">{pizza.price} ₽</div>
				<button className="button card-button" onClick={handlerAddProduct}>
					<Plus size={16} />
					<span className="card-button__text">Добавить</span>
				</button>
			</div>
		</div>
	);
}
