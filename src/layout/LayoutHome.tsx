import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function LayoutHome() {
	return (
		<>
			<Header />
			<Outlet></Outlet>
		</>
	);
}
