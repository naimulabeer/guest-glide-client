import { useContext, useEffect, useState } from "react";
import BookingList from "./BookingList";
import { AuthContext } from "../../contexts/AuthProvider";
import useAxiosSecure from "../../hooks/useAxios";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setBookings(res.data));
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
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
        ""
      ) : (
        <div className="text-right text-2xl mt-10 px-5 lg:mr-48 md:mr-10 ">
          Bookings Count: {bookings.length}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
