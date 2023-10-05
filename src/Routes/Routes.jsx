
import { createBrowserRouter } from "react-router-dom";
import MainHome from "../Layout/MainHome";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Shared/Home/Home";
import PriviteRoute from "./PriviteRoute/PriviteRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainHome></MainHome>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/news.json')
            },
            {
                path: '/news/:id',
                element: <PriviteRoute>
                    <News></News>
                </PriviteRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
        ]
    }
])
export default router