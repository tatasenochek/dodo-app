import styles from "./pizza-list.module.scss";
import { IPizzaList } from "./types";

export function PizzaList({ children }: IPizzaList) {
	return <div className={styles["content__items"]}>{children}</div>;
}
