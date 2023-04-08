import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Booking from "../Pages/BookingPage/Booking";
import CategoryOfProducts from "../Pages/CategoryOfProducts/CategoryOfProducts";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ProductPage from "../Pages/ProductPage/ProductPage";
import SignUp from "../Pages/SignUp/SignUp";
import Signin from "../Pages/Signin/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/booking/:id",
                element: <Booking></Booking>,
                loader: ({ params }) => {
                    return fetch(`https://grocery-server.vercel.app/booking-product/${params.id}`)
                }
            },
            {
                path: "/products",
                element: <ProductPage></ProductPage>
            },
            {
                path: "/signin",
                element: <Signin></Signin>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/category/:id",
                element: <CategoryOfProducts></CategoryOfProducts>,
                loader: ({ params }) => {
                    return fetch(`https://grocery-server.vercel.app/category/${params.id}`)
                }
            }
        ]
    }
])

export default router;