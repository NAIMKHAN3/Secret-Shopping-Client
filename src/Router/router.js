import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Deshboard from "../Layout/Deshboard/Deshboard";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/Products/ProductDetails";
import Card from "../Pages/Card/Card";
import CardDetails from "../Pages/Card/CardDetails";
import Payment from "../Pages/Payment/Payment";
import DirectPayment from "../Pages/Payment/DirectPayment";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import AdminRoute from "../Pages/PrivateRoute/AdminRoute";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/home', element: <Home />
            },
            {
                path: '/all-products', element: <Products />
            },
            {
                path: '/register', element: <Register />
            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/product-details/:_id', element: <PrivateRoute><ProductDetails /></PrivateRoute>
            },
            {
                path: '/direct-payment/:id', element: <PrivateRoute><DirectPayment /></PrivateRoute>
            },
            {
                path: '/card', element: <PrivateRoute><Card /></PrivateRoute>
            },
            {
                path: '/card-details/:_id', element: <PrivateRoute><CardDetails /></PrivateRoute>
            },
            {
                path: '/payment/:id', element: <PrivateRoute><Payment /></PrivateRoute>
            },
        ]
    },
    {
        path: '/deshboard', element: <PrivateRoute><AdminRoute><Deshboard /></AdminRoute></PrivateRoute>, children: [
            {
                path: '/deshboard/add-product', element: <AddProduct />
            }
        ]
    }
])

export default router;