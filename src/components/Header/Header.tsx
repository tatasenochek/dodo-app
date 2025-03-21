import { ShoppingCart } from "lucide-react";
import { Button } from "../Button/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import { Search } from "../Search/Search";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function Header() {
	const { totalPrice, count } = useSelector((state: RootState) => state.cart);
	const location = useLocation();
	const params = useParams();

	return (
		<header className="header">
			<Link to={"/"}>
				<div className="header__logo">
					<img src="/logo.svg" alt="логотип пиццерии" />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>
			</Link>
			{location.pathname === `/product/${params.id}` ||
			location.pathname === "/cart" ? (
				""
			) : (
				<Search />
			)}
			{location.pathname === "/cart" ? (
				""
			) : (
				<Link to={"/cart"}>
					<Button className="cart-button">
						{totalPrice === 0 ? (
							"Корзина пуста"
						) : (
							<>
								<span className="cart-button__price">{totalPrice} ₽</span>
								<div className="cart-button__count">
									<ShoppingCart size={16} />
									<span>{count}</span>
								</div>
							</>
						)}
					</Button>
				</Link>
			)}
		</header>
	);
}
