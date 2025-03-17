import { ShoppingCart } from "lucide-react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className="header">
			<div className="container">
				<Link to={"/"}>
					<div className="header__logo">
						<img src="/logo.svg" alt="логотип пиццерии" />
						<div>
							<h1>React Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				<Link to={"/cart"}>
					<Button className="cart-button">
						<span className="cart-button__price">520 ₽</span>
						<div className="cart-button__count">
							<ShoppingCart size={16} />
							<span>3</span>
						</div>
					</Button>
				</Link>
			</div>
		</header>
	);
}
