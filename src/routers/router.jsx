import App from "../App";
import Home from "../pages/home/Home";
import CartPage from "../pages/books/CartPage";
import Register from "../components/Register";
import Login from "../components/login";
import {createBrowserRouter}from "react-router-dom";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/orders",
                element: <div>orders</div>
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element:<Register/>
            },
            {
                path: "/cart",
                element:<CartPage/>
            },
            {
                path: "/checkout",
                element: <CheckoutPage/>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
            },
        ]
    },
]);

export default router;
