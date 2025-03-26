import styles from "../scss/pages/success.module.scss";
import { Link } from "react-router-dom";

export default function Success() {
	return (
		<div className={styles["success"]}>
			<img className={styles["success__image"]} src="/check.png" alt="успех" />
			<h1 className={styles["success__title"]}>Ваш заказ успешно принят</h1>
			<Link to="/" className={styles["success__link"]}>
				Вернуться на главную
			</Link>
		</div>
	);
}
