/* eslint-disable no-unused-vars */
import { useState } from "react";
import useDate from "../../hooks/useDate";

/* eslint-disable react/prop-types */
const BookingList = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, date, roomName, price, img, status } = booking;
  const minDate = useDate();
  const [updatedDate, setUpdatedDate] = useState(date); // State to hold the updated date
  const [bookings, setBookings] = useState([]);

  // Function to handle date input change and send the update to the server
  const handleDateChange = (newDate) => {
    setUpdatedDate(newDate); // Update the state with the new date
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ date: newDate }),
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
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingList;
