import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StorePage } from "./pages/StorePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

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
    {
        path: "/sobre",
        element: <AboutPage />,
    },
    {
        path: "/contacto",
        element: <ContactPage />,
    },
]);