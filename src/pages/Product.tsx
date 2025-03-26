import styles from "../scss/pages/product.module.scss";
import clsx from "clsx";
import { ChevronLeft, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { typePizza } from "../constant/constant";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { fetchProductById } from "../store/slice/productsSlice";
import { addProduct, IProduct } from "../store/slice/cartSlice";

export default function Product() {
	const [pizzaType, setPizzaType] = useState(0);
	const [pizzaSize, setPizzaSize] = useState(0);
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
		<div className={styles["product"]}>
			<Link to="/" className={styles["product__link"]}>
				<ChevronLeft />
				Назад
			</Link>
			<img
				className={styles["product__image"]}
				src={pizza?.imageUrl}
				alt={pizza?.title}
			/>
			<div className={styles["product__info"]}>
				<h4 className={styles["product__title"]}>{pizza?.title}</h4>
				<p>{pizza?.description}</p>
				<div className={styles["product__selector"]}>
					<ul>
						{pizza?.types.map((i, index) => (
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
						{pizza?.sizes.map((item, index) => (
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
				<div className={styles["product__bottom"]}>
					<div className={styles["product__price"]}>от {pizza?.price} ₽</div>
					<button className={clsx(styles["button"], styles["card-button"])} onClick={handlerAddProduct}>
						<Plus size={16} />
						<span>Добавить</span>
					</button>
				</div>
			</div>
		</div>
	);
}
