import { DATA_PIZZAS } from "../../DATA_PIZZAS";
import { PizzaItem } from "../PizzaItem/PizzaItem";

export function PizzaList() {
  return <div className="content__items">
    {DATA_PIZZAS.map(pizza => (
      <PizzaItem pizza={pizza} key={pizza.id}/>
    ))}
  </div>;
}