import styles from "./pizza-item.module.scss";
import { Info, Plus } from "lucide-react";
import { IPizzaItems } from "./types";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { typePizza } from "../../constant/constant";
import { useDispatch } from "react-redux";
import { addProduct, IProduct } from "../../store/slice/cartSlice";

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
		<div className={styles["pizza-block"]}>
			<Link
				title="Подробнее о пицце"
				to={`/product/${pizza.id}`}
				className={styles["pizza-block__info"]}
			>
				<Info />
			</Link>
			<img
				className={styles["pizza-block__image"]}
				src={pizza.imageUrl}
				alt={pizza.title}
			/>
			<h4 className={styles["pizza-block__title"]}>{pizza.title}</h4>

			<div className={styles["pizza-block__selector"]}>
				<ul>
					{pizza.types.map((i, index) => (
						<li
							key={index}
							onClick={() => setPizzaType(index)}
							className={clsx(pizzaType === index && styles["active"])}
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
							className={clsx(pizzaSize === index && styles["active"])}
						>
							{item} см.
						</li>
					))}
				</ul>
			</div>
			<div className={styles["pizza-block__bottom"]}>
				<div className={styles["pizza-block__price"]}>{pizza.price} ₽</div>
				<button className={styles["card-button"]}  onClick={handlerAddProduct}>
					<Plus size={16} />
					<span>Добавить</span>
				</button>
			</div>
		</div>
	);
}
