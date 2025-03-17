import clsx from "clsx";
import { Plus } from "lucide-react";
import { useState } from "react";

export function Product() {
		const [pizzaType, setPizzaType] = useState(0);
		const [pizzaSize, setPizzaSize] = useState(0);
		const [count, setCount] = useState(0)
	return (
		<div className="pizza-block">
			<img className="pizza-block__image" src="/image.png" alt="Pizza" />
			<h4 className="pizza-block__title">Сырный цыпленок</h4>
			<div className="pizza-block__selector">
				<ul>
					{/* {pizza.types.map((i, index) => (
						<li
							key={index}
							onClick={() => setPizzaType(index)}
							className={clsx(`${pizzaType === index ? "active" : ""}`)}
						>
							{typePizza[i]}
						</li>
					))} */}
				</ul>
				<ul>
					{/* {pizza.sizes.map((item, index) => (
						<li
							key={index}
							onClick={() => setPizzaSize(index)}
							className={clsx(`${pizzaSize === index ? "active" : ""}`)}
						>
							{item} см.
						</li>
					))} */}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от 280 ₽</div>
				<button
					className="button card-button"
					onClick={() => setCount(count + 1)}
				>
					<Plus size={16} />
					<span className="card-button__text">Добавить</span>
					<span
						className={clsx(`${count === 0 ? "hidden" : "card-button__count"}`)}
					>
						{count}
					</span>
				</button>
			</div>
		</div>
	);
}
