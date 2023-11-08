import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import useDate from "../../hooks/useDate";
import Loader from "../../components/Loading/Loader";

function BookingPage() {
  const [loading, setLoading] = useState(true);
  const room = useLoaderData();
  const { _id, name, price_per_night, images, room_description } = room;
  const { user } = useContext(AuthContext);
  const minDate = useDate();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = user?.displayName;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      bookerName: displayName,
      email,
      img: images[0],
      date,
      roomName: name,
      room_Id: _id,
      price: price_per_night,
      description: room_description,
    };

    fetch("https://hotel-booking-server-one.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Room Booked Successfully", {
            position: "top-center",
            autoClose: 5000,
          });
          setTimeout(() => {
            navigate(`/room/${_id}/bookingPage/addReview`);
          }, 1000);
        } else if (data.message === "Room is already booked") {
          toast.error("Room is already booked", {
            position: "top-center",
          });
        }
      });
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-md mb-10 mt-10">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-slate-800 mb-10 ">
        Booking Information for {name}
      </h2>

      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 gap-6">
            <div className="relative">
              <input
                type="text"
                id="displayName"
                name="displayName"
                defaultValue={user?.displayName}
                className="w-full py-2 px-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-200"
                disabled
              />
              <label
                htmlFor="displayName"
                className="absolute top-0 left-0 -mt-4 ml-2 text-gray-600 text-sm transition-all duration-200"
              >
                Display Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={user?.email}
                className="w-full py-2 px-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-200"
                disabled
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-0 -mt-4 ml-2 text-gray-600 text-sm transition-all duration-200"
              >
                Email
              </label>
            </div>
          </div>
          <div className="mt-10 relative">
            <input
              type="date"
              id="date"
              name="date"
              min={minDate}
              defaultValue={minDate}
              className="w-full py-2 px-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-200"
              required
            />
            <label
              htmlFor="date"
              className="absolute top-0 left-0 -mt-4 ml-2 text-gray-600 text-sm transition-all duration-200"
            >
              Booking Date
            </label>
          </div>
          <div className="mt-10 relative">
            <input
              type="number"
              id="amount"
              name="amount"
              min={price_per_night * 0.9}
              defaultValue={price_per_night}
              className="w-full py-2 px-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-200"
              required
            />
            <label
              htmlFor="amount"
              className="absolute top-0 left-0 -mt-4 ml-2 text-gray-600 text-sm transition-all duration-200"
            >
              Price per Night
            </label>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-200 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default BookingPage;
