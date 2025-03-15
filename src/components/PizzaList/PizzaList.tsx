import { IPizzaList } from "./types";

export function PizzaList({ children }: IPizzaList) {
	return <div className="content__items">{children}</div>;
}
