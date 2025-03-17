import { ChevronLeft, ShoppingCart, Trash2 } from "lucide-react";
import { Title } from "../components/Title/Title";
import { Button } from "../components/Button/Button";
import { CartItem } from "../components/CartItem/CartItem";
import { Link } from "react-router-dom";

export function Cart() {
	return (
		<div className="cart">
			<div className="cart__header">
				<Title>
					<ShoppingCart />
					Корзина
				</Title>
				<Button className="cart__clear-button">
					<Trash2 className="cart__clear-button--icon" />
					Очистить корзину
				</Button>
			</div>
			<ul className="cart__list">
				<CartItem />
				<CartItem />
			</ul>
			<div className="cart__total">
				<p className="cart__total--count">
					Всего пицц: <b>3 шт.</b>
				</p>
				<p className="cart__total--price">
					Сумма заказа: <b>900 ₽</b>
				</p>
			</div>
			<div className="cart__action">
				<Link to="/" className="cart__action--link">
					<ChevronLeft />
					Вернуться назад
				</Link>
				<Button className="cart__action--button-pay">Оплатить сейчас</Button>
			</div>
		</div>
	);
}
