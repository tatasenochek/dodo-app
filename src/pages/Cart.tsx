import { ChevronLeft, ShoppingCart, Trash2 } from "lucide-react";
import { Title } from "../components/Title/Title";
import { Button } from "../components/Button/Button";
import { CartItem } from "../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { clearProducts } from "../store/slice/cartSlice";
import { Empty } from "../components/Empty/Empty";

export function Cart() {
	const { products, totalPrice, count } = useSelector(
		(state: RootState) => state.cart
	);
	const dispatch = useDispatch();

	function handlerClearProductsCart() {
		const response = confirm("Вы действительно хотите удалить все пиццы из корзины?")
		if (response) {
			dispatch(clearProducts())
		}
		return
	}

	return (
		<div className="cart">
			{totalPrice === 0 ? (
				<Empty />
			) : (
				<>
					<div className="cart__header">
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
					<ul className="cart__list">
						{products.map((p) => (
							<CartItem key={p.id} product={p} />
						))}
					</ul>
					<div className="cart__total">
						<p className="cart__total--count">
							Всего пицц: <b>{count} шт.</b>
						</p>
						<p className="cart__total--price">
							Сумма заказа: <b>{totalPrice} ₽</b>
						</p>
					</div>
					<div className="cart__action">
						<Link to="/" className="cart__action--link">
							<ChevronLeft />
							Вернуться назад
						</Link>
						<Button className="cart__action--button-pay">
							Оплатить сейчас
						</Button>
					</div>
				</>
			)}
		</div>
	);
}
