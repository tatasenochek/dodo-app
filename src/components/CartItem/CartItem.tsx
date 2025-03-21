import { Minus, Plus, X } from "lucide-react";
import { Button } from "../Button/Button";
import { addProduct, deleteProduct, IProduct, removeProduct } from "../../store/slice/cartSlice";
import { typePizza } from "../../constant/constant";
import { useDispatch } from "react-redux";
import clsx from "clsx";

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
		<li className="catr-item">
			<div className="catr-item__description">
				<img
					className="catr-item__description--image"
					src={product.imageUrl}
					alt={product.title}
				/>
				<h2 className="catr-item__description--title">{product.title}</h2>
				<p className="catr-item__description--info">
					{typePizza[product.type]}, {product.size} см, {product.price}₽
				</p>
			</div>
			<div className="catr-item__counter">
				<Button
					onClick={handlerRemoveProduct}
					className={clsx(`catr-item__counter--button ${product.count == 1 ? "disabled" : ""}`)}
				>
					<Minus size={10} />
				</Button>
				<p>{product.count}</p>
				<Button
					onClick={handlerAddProduct}
					className="catr-item__counter--button"
				>
					<Plus size={10} />
				</Button>
			</div>
			<p className="catr-item__price">{product.price * product.count} ₽</p>
			<Button
				onClick={handlerDeleteProduct}
				className="catr-item__delete-button"
			>
				<X size={10} />
			</Button>
		</li>
	);
}
