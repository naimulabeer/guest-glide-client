/* eslint-disable no-unused-vars */
import { useState } from "react";
import useDate from "../../hooks/useDate";

/* eslint-disable react/prop-types */
const BookingList = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, date, roomName, price, img, status } = booking;
  const minDate = useDate();
  const [updatedDate, setUpdatedDate] = useState(date);
  const [bookings, setBookings] = useState([]);

  const handleDateChange = (newDate) => {
    setUpdatedDate(newDate);
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: newDate, status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setBookings((prevBookings) =>
            prevBookings.map((booking) =>
              booking._id === _id ? { ...booking, date: newDate } : booking
            )
          );
          console.log(data);
        }
      });
  };

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-12 h-12">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{roomName}</td>
      <td>
        {status === "confirm" ? (
          date
        ) : (
          <input
            type="date"
            id="date"
            name="date"
            value={updatedDate}
            min={minDate}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        )}
      </td>

      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-blue-600">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn shadow-[0_9px_0_rgb(0, 0, 0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-emerald-400 ease-out hover:translate-y-1 transition-all rounded "
          >
            Confirm Booking
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingList;
