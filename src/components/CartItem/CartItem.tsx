import { Minus, Plus, X } from "lucide-react";
import { Button } from "../Button/Button";

export function CartItem() {
	return (
		<li className="catr-item">
			<div className="catr-item__description">
				<img
					className="catr-item__description--image"
					src="/image.png"
					alt="Пицца"
				/>
				<h2 className="catr-item__description--title">Сырный цыпленок</h2>
				<p className="catr-item__description--info">тонкое тесто, 26 см.</p>
			</div>
			<div className="catr-item__counter">
				<Button className="catr-item__counter--button">
					<Minus size={10} />
				</Button>
				<p>2</p>
				<Button className="catr-item__counter--button">
					<Plus size={10} />
				</Button>
			</div>
			<p className="catr-item__price">770 ₽</p>
			<Button className="catr-item__delete-button">
				<X size={10} />
			</Button>
		</li>
	);
}
