import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StorePage } from "./pages/StorePage";

export const Routes = () => {
    return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/loja",
        element: <StorePage />,
    },
]);