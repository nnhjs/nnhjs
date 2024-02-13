import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/apps/App";
import "src/styles/global.css";
import "src/styles/tailwind.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Css from "src/apps/Css";
import Input from "src/apps/Input";
import Container from "src/components/Container.tsx";
import ErrorPage from "src/components/ErrorPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Container>
				<App />
			</Container>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/css",
		element: (
			<Container>
				<Css />
			</Container>
		),
	},
	{
		path: "/input",
		element: (
			<Container>
				<Input />
			</Container>
		),
	},
]);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
