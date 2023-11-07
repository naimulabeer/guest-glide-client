/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import ReviewList from "./ReviewList";

function ShowReviews({ roomsDetails }) {
  const [reviews, setReviews] = useState([]);
  const { _id } = roomsDetails;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?reviewerId=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [_id]);

  return (
    <>
      <div className="mt-10 mb-10 px-10">
        <h2 className=" text-2xl uppercase">Reviews</h2>
        <div className="bg-blue-500 w-20 h-[2px] mt-2 mb-10"></div>
        <p className="text-lg mb-10">See all the other reviews...</p>

        <ul>
          {reviews.map((review) => (
            <ReviewList review={review} key={review._id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShowReviews;
