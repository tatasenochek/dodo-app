import styles from "./cart-item.module.scss";
import { Minus, Plus, X } from "lucide-react";
import {
	addProduct,
	deleteProduct,
	IProduct,
	removeProduct,
} from "../../store/slice/cartSlice";
import { typePizza } from "../../constant/constant";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { Button } from "../Button/Button";

export function CartItem({ product }: { product: IProduct }) {
	const dispatch = useDispatch();

	function handlerAddProduct() {
		dispatch(addProduct(product));
	}

	function handlerRemoveProduct() {
		dispatch(removeProduct(product));
	}

	function handlerDeleteProduct() {
		dispatch(deleteProduct(product));
	}

	return (
		<li className={styles["catr-item"]}>
			<div className={styles["catr-item__description"]}>
				<img
					className={styles["catr-item__description--image"]}
					src={product.imageUrl}
					alt={product.title}
				/>
				<h2 className={styles["catr-item__description--title"]}>
					{product.title}
				</h2>
				<p className={styles["catr-item__description--info"]}>
					{typePizza[product.type]}, {product.size} см, {product.price}₽
				</p>
			</div>
			<div className={styles["catr-item__counter"]}>
				<button
					onClick={handlerRemoveProduct}
					className={clsx(
						styles["cart-item__button"],
						styles["cart-item__counter--button"],
						product.count == 1 && styles["disabled"]
					)}
				>
					<Minus size={10} />
				</button>
				<p>{product.count}</p>
				<button
					onClick={handlerAddProduct}
					className={clsx(
						styles["cart-item__button"],
						styles["cart-item__counter--button"]
					)}
				>
					<Plus size={10} />
				</button>
			</div>
			<p className={styles["catr-item__price"]}>
				{product.price * product.count} ₽
			</p>
			<button
				onClick={handlerDeleteProduct}
				className={clsx(
					styles["cart-item__button"],
					styles["cart-item__delete-button"]
				)}
			>
				<X size={10} />
			</button>
		</li>
	);
}
