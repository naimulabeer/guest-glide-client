import { useEffect, useState } from "react";

function useReviewCount(roomId) {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?reviewerId=${roomId}`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.length;
        setReviewCount(count);
      });
  }, [roomId]);

  return reviewCount;
}

export default useReviewCount;
