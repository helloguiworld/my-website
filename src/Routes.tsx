import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about-me",
        element: <AboutMePage />,
    },
]);

export default function AppRoutes() {
    return (
        <RouterProvider router={router} />
    );
}