import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/app.scss";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/NotFound";
import { LayoutHome } from "./layout/LayoutHome";

const router = createBrowserRouter([
	{
		path: "/",
		element: (<LayoutHome />),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/product/:id",
				element: <Product />,
			},
			{
				path: "/*",
				element: <NotFound />,
			},
		],
	},
]);

export function App() {
	return <RouterProvider router={router}></RouterProvider>;
}
