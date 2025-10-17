import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])