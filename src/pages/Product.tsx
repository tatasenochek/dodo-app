import clsx from "clsx";
import { ChevronLeft, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { typePizza } from "../constant/constant";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { fetchProductById } from "../store/slice/productsSlice";
import { addProduct, IProduct } from "../store/slice/cartSlice";

export function Product() {
	const [pizzaType, setPizzaType] = useState(0);
	const [pizzaSize, setPizzaSize] = useState(0);
	const [count, setCount] = useState(0);
	const { id } = useParams();
	const { pizza } = useSelector((state: RootState) => state.products);

	const dispatch = useDispatch();
	const appDispatch = useAppDispatch();

	async function getPizza() {
		appDispatch(fetchProductById({ id }));
	}

	useEffect(() => {
		getPizza();
	}, []);

	function handlerAddProduct() {
		setCount(count + 1);
		if (pizza) {
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
	}

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
						onClick={handlerAddProduct}
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
