import styles from "./empty.module.scss";
import { Link } from "react-router-dom";

export function Empty() {
	return (
		<div className={styles["cart-empty"]}>
			<h2 className={styles["cart-empty__title"]}>
				Корзина пустая <span>😕</span>
			</h2>
			<p className={styles["cart-empty__description"]}>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img
				className={styles["cart-empty__image"]}
				src="/empty.png"
				alt="Empty cart"
			/>
			<Link to="/" className={styles["cart-empty__link"]}>
				<span>Вернуться назад</span>
			</Link>
		</div>
	);
}
