import { Link } from "react-router-dom";

export default function Success() {
  return (
		<div className="success">
			<img className="success__image" src="/check.png" alt="успех" />
			<h1 className="success__title">Ваш заказ успешно принят</h1>
			<Link to="/" className="success__link">
				Вернуться на главную
			</Link>
		</div>
	);
}