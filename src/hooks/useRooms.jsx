import { useEffect, useState } from "react";

function useRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://hotel-booking-server-one.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return rooms;
}

export default useRooms;
