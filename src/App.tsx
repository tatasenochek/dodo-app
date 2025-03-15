import { Categories } from "./components/Categories/Categories"
import { Header } from "./components/Header/Header"
import { PizzaList } from "./components/PizzaList/PizzaList"
import { Sort } from "./components/Sort/Sort"
import { Title } from "./components/Title/Title"
import "./scss/app.scss"

export function App() {
	return (<div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <Title>Все пиццы</Title>
          <PizzaList />
        </div>
      </div>
    </div>)
}
