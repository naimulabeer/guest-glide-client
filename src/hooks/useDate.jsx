import { useEffect, useState } from "react";

function useDate() {
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    const currentDate = `${yyyy}-${mm}-${dd}`;

    setMinDate(currentDate);
  }, []);

  return minDate;
}

export default useDate;
