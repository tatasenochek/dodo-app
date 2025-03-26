import styles from "./categories.module.scss"
import clsx from "clsx";
import { categories } from "../../constant/constant";
import { ICategories } from "./types";

export function Categories({ activeIndexCategory, onclick }: ICategories) {
	return (
		<ul className={styles["categories"]}>
			{categories.map((item, index) => (
				<li
					className={clsx(
						styles['categories__item'], activeIndexCategory === index && styles["active"]
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
