import { useEffect, useState } from "react";

function useBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://hotel-booking-server-one.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return bookings;
}

export default useBookings;
