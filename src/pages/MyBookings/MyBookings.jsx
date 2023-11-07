import { useContext, useEffect, useState } from "react";
import BookingList from "./BookingList";
import { AuthContext } from "../../contexts/AuthProvider";
import useAxiosSecure from "../../hooks/useAxios";
import Swal from "sweetalert2";
import useDate from "../../hooks/useDate";
import PageTitle from "../../components/PageTitle/PageTitle";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  const minDate = useDate();

  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setBookings(res.data));
  }, [url, axiosSecure]);

  const handleDelete = (id, bookedDate) => {
    const bookedMoment = new Date(bookedDate);
    const currentDate = new Date(minDate);

    const cancelDate = new Date(bookedMoment);
    cancelDate.setDate(cancelDate.getDate() - 1);

    if (currentDate <= cancelDate) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your booking has been deleted.",
                  "success"
                );
                const remaining = bookings.filter(
                  (booking) => booking._id !== id
                );
                setBookings(remaining);
              }
            });
        }
      });
    } else {
      Swal.fire(
        "Error",
        "Booking can only be canceled up to 1 day before the booked date.",
        "error"
      );
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="mb-20 mt-10">
      <PageTitle title="My Bookings" />
      <h2 className="text-5xl text-center uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-800">
        Your bookings
      </h2>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Image</th>
              <th>Room Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingList
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingList>
            ))}
          </tbody>
        </table>
      </div>
      {bookings.length === 0 ? (
        <>
          <div className="mt-20 flex flex-col items-center gap-4">
            <h1 className=" text-3xl">You have no Bookings yet</h1>
            <Link to="/rooms">
              <AwesomeButton type="secondary">Book Now</AwesomeButton>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-right text-2xl mt-10 px-5 lg:mr-48 md:mr-10 ">
          Bookings Count: {bookings.length}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
