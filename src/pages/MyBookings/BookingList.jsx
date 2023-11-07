/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
const BookingList = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, date, roomName, price, img, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id, date)}
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
      <td>{status === "confirm" ? date : date}</td>

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
