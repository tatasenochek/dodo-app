import styles from "../scss/pages/not-found.module.scss";
import { Link } from "react-router-dom";

export function NotFound() {
	return (
		<div className={styles["not-found"]}>
			<h1 className={styles["not-found__title"]}>
				Упс.. Ничего не найдено <span>🤷‍♀️</span>
			</h1>
			<p className={styles["not-found__description"]}>
				К сожалени данная страница отсутствует в нашем интернет-магазине
			</p>
			<Link to="/" className={styles["not-found__link"]}>
				Вернуться на главную
			</Link>
		</div>
	);
}
