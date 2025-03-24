import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/app.scss";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { LayoutHome } from "./layout/LayoutHome";
import { lazy, Suspense } from "react";

const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const Success = lazy(() => import("./pages/Success"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutHome />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<>Идет загрузка корзины...</>}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/product/:id",
				element: (
					<Suspense fallback={<>Загружаем данные о товаре...</>}>
						<Product />
					</Suspense>
				),
			},
			{
				path: "/success",
				element: (
					<Suspense fallback={<>Идет отправка заказа...</>}>
						<Success />
					</Suspense>
				),
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
