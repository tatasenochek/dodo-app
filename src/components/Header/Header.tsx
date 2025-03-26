import styles from "./header.module.scss";
import { LogIn, LogOut, ShoppingCart } from "lucide-react";
import { Button } from "../Button/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import { Search } from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setAuth } from "../../store/slice/authSlice";

export function Header() {
	const { totalPrice, count } = useSelector((state: RootState) => state.cart);
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const location = useLocation();
	const params = useParams();
	const dispatch = useDispatch();

	function handlerAuth() {
		dispatch(setAuth());
	}

	return (
		<header className={styles["header"]}>
			<Link to={"/"}>
				<div className={styles["header__logo"]}>
					<img src="./logo.svg" alt="логотип пиццерии" />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>
			</Link>
			{location.pathname === `/product/${params.id}` ||
			location.pathname === "/cart" ||
			location.pathname === "/success" ? (
				""
			) : (
				<Search />
			)}
			{location.pathname === "/cart" || location.pathname === "/success" ? (
				""
			) : (
				<Link to={"/cart"}>
					<Button className="cart-button">
						{totalPrice === 0 ? (
							"Корзина пуста"
						) : (
							<>
								<span className={styles["cart-button__price"]}>{totalPrice} ₽</span>
								<div className={styles["cart-button__count"]}>
									<ShoppingCart size={16} />
									<span>{count}</span>
								</div>
							</>
						)}
					</Button>
				</Link>
			)}
			<Button onClick={handlerAuth} className="auth-button">
				{isAuth ? <LogIn size={25.5} /> : <LogOut size={25.5} />}
			</Button>
		</header>
	);
}
