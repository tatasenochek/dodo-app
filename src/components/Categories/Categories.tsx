import clsx from "clsx";
import { useState } from "react";

const categories: string[] = [
	"Все",
	"Мясные",
	"Вегетарианская",
	"Гриль",
	"Острые",
	"Закрытые",
];

export function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  

	return (
		<ul className="categories">
			{categories.map((item, index) => (
				<li
					className={clsx(
						`categories__item ${activeIndex === index ? "active" : ""}`
					)}
          key={index}
          onClick={() => setActiveIndex(index)}
				>
					{item}
				</li>
			))}
			{/* <li className="active">Все</li> */}
		</ul>
	);
}
