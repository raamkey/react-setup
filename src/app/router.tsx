import React from "react";
import { createHashRouter, Link, Outlet, RouterProvider } from "react-router";

export const createAppRouter = () => {
	return createHashRouter([
		{
			path: "/",
			element: (
				<>
					<Link to="/">Home Page</Link>
					<Link to="/second">Second Page</Link>
					<Link to="/third">Third Page</Link>
					<br />
					<Outlet />
				</>
			),
			children: [
				{ index: true, element: "Home Page" },
				{ path: "/second", element: "Second Page" },
				{ path: "/third", element: "Third Page" },
			],
		},
	]);
};

export const AppRouter = () => {
	const router = React.useMemo(() => createAppRouter(), []);
	return <RouterProvider router={router} />;
};
