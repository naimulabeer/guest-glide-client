import { useEffect, useState } from "react";

function useReviewCount(roomId) {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://hotel-booking-server-one.vercel.app/reviews?reviewerId=${roomId}`
    )
      .then((res) => res.json())
      .then((data) => {
        const count = data.length;
        setReviewCount(count);
      });
  }, [roomId]);

  return reviewCount;
}

export default useReviewCount;
