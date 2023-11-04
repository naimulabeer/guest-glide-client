import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import About from "../pages/About/About";
import Faq from "../pages/FAQ/Faq";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/rooms',
                element: <Rooms />
            },
            {
                path: "/myBookings",
                element: <MyBookings />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/login",
                element: <SignIn  />
            },
            {
                path: "/signup",
                element: <SignUp />
            }

        ]
    }
])

export default router;