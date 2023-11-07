import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewList from "./ReviewList";

function ShowReviews() {
  const { roomId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?reviewerId=${roomId}`) // Pass the roomId as a query parameter
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [roomId]);

  return (
    <div className="mt-10 mb-10 px-10">
      <h2 className=" text-2xl uppercase">
        Reviews
        <div className="bg-blue-500 w-20 h-[2px] mt-2 mb-10"></div>
        <p className="text-lg mb-10">See all the other reviews...</p>
      </h2>
      <ul>
        {reviews.map((review) => (
          <ReviewList review={review} key={review._id} />
        ))}
      </ul>
    </div>
  );
}

export default ShowReviews;
