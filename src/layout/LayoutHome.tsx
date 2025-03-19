import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { SearchContextProvider } from "../context/search.context";

export function LayoutHome() {
	return (
		<SearchContextProvider>
      <Header />
      <Outlet></Outlet>
		</SearchContextProvider>
	);
}
