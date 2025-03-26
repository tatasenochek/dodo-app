import styles from "../scss/pages/cart.module.scss";
import { ChevronLeft, ShoppingCart, Trash2 } from "lucide-react";
import { Title } from "../components/Title/Title";
import { Button } from "../components/Button/Button";
import { CartItem } from "../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { clearProducts } from "../store/slice/cartSlice";
import { Empty } from "../components/Empty/Empty";

export default function Cart() {
	const { products, totalPrice, count } = useSelector(
		(state: RootState) => state.cart
	);
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const dispatch = useDispatch();

	function handlerClearProductsCart() {
		const response = confirm(
			"Вы действительно хотите удалить все пиццы из корзины?"
		);
		if (response) {
			dispatch(clearProducts());
		}
		return;
	}

	function handlerOrder() {
		dispatch(clearProducts());
	}

	return (
		<div className={styles["cart"]}>
			{totalPrice === 0 ? (
				<Empty />
			) : (
				<>
					<div className={styles["cart__header"]}>
						<Title>
							<ShoppingCart />
							Корзина
						</Title>
						<Button
							onClick={handlerClearProductsCart}
							className="cart__clear-button"
						>
							<Trash2 className="cart__clear-button--icon" />
							Очистить корзину
						</Button>
					</div>
					<ul className={styles["cart__list"]}>
						{products.map((p) => (
							<CartItem key={p.id} product={p} />
						))}
					</ul>
					<div className={styles["cart__total"]}>
						<p className={styles["cart__total--count"]}>
							Всего пицц: <b>{count} шт.</b>
						</p>
						<p className={styles["cart__total--price"]}>
							Сумма заказа: <b>{totalPrice} ₽</b>
						</p>
					</div>
					<div className={styles["cart__action"]}>
						<Link to="/" className={styles["cart__action--link"]}>
							<ChevronLeft />
							Вернуться назад
						</Link>
						{isAuth ? (
							""
						) : (
							<Link to="/success">
								<Button
									onClick={handlerOrder}
									className="cart__action--button-pay"
								>
									Оплатить сейчас
								</Button>
							</Link>
						)}
					</div>
				</>
			)}
		</div>
	);
}
