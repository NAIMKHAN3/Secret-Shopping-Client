import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Deshboard from "../Layout/Deshboard/Deshboard";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/Products/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
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
                path: '/product-details/:_id', element: <ProductDetails />
            }
        ]
    },
    {
        path: '/deshboard', element: <Deshboard />, children: [
            {
                path: '/deshboard/add-product', element: <AddProduct />
            }
        ]
    }
])

export default router;