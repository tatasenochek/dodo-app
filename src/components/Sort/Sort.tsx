import clsx from "clsx";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const sortedParams: string[] = ["популярности", "цене", "алфавиту"];

export function Sort() {
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [activeIndex, setActiveIndex] = useState(0);

	function handlerActivSortedParams(index: number) {
		setActiveIndex(index);
		setIsVisible(true);
	}

	return (
		<div className="sort">
			<div className="sort__label">
				<ChevronUp size={14} />
				<b>Сортировка по:</b>
				<span onClick={() => setIsVisible(!isVisible)}>
					{sortedParams[activeIndex]}
				</span>
			</div>
			<ul className={clsx(`sort__popup ${isVisible === true ? "hidden" : ""}`)}>
				{sortedParams.map((item, index) => (
					<li
						key={index}
						onClick={() => handlerActivSortedParams(index)}
						className={clsx(`${activeIndex === index ? "active" : ""}`)}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
