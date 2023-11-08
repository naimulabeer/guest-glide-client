import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import About from "../pages/About/About";
import Faq from "../pages/FAQ/Faq";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/Error/Error";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import BookingPage from "../pages/BookingPage/BookingPage";
import PrivateRoute from "./PrivateRoute";
import ReviewPage from "../pages/Review/ReviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "room/:id",
        element: <RoomDetails />,
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-one.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: "room/:id/bookingPage/addReview",
        element: (
          <PrivateRoute>
            <ReviewPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-one.vercel.app/rooms/${params.id}`
          ),
      },

      {
        path: "room/:id/bookingPage",
        element: (
          <PrivateRoute>
            <BookingPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-one.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
