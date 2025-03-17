import { Link } from "react-router-dom";

export function NotFound() {
	return (
		<div className="not-found">
			<h1 className="not-found__title">
				Упс.. Ничего не найдено <span>🤷‍♀️</span>
			</h1>
			<p className="not-found__description">
				К сожалени данная страница отсутствует в нашем интернет-магазине
			</p>
			<Link to="/" className="not-found__link">
				Вернуться на главную
			</Link>
		</div>
	);
}
