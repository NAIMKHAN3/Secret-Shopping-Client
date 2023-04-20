import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Deshboard from "../Layout/Deshboard/Deshboard";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/register', element: <Register />
            },
            {
                path: '/login', element: <Login />
            }
        ]
    },
    {
        path: '/deshboard', element: <Deshboard />
    }
])

export default router;