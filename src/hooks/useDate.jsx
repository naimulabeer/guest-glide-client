import { useEffect, useState } from "react";

function useDate() {
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const DD = String(today.getDate()).padStart(2, "0");
    const MM = String(today.getMonth() + 1).padStart(2, "0");
    const YYYY = today.getFullYear();

    const currentDate = `${YYYY}-${MM}-${DD}`;

    setMinDate(currentDate);
  }, []);

  return minDate;
}

export default useDate;
