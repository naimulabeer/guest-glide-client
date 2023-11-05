import { useEffect, useState } from "react";

function useRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return rooms;
}

export default useRooms;
