import clsx from "clsx";
import { categories } from "../../constant/constant";
import { ICategories } from "./types";

export function Categories({ activeIndexCategory, onclick }: ICategories) {
	return (
		<ul className="categories">
			{categories.map((item, index) => (
				<li
					className={clsx(
						`categories__item ${activeIndexCategory === index ? "active" : ""}`
					)}
					key={index}
					onClick={() => onclick(index)}
				>
					{item}
				</li>
			))}
		</ul>
	);
}
