/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";

function ReviewList({ review }) {
  return (
    <div className="flex gap-20 mb-10 w-1/2 px-2 py-2 items-center border border-slate-200">
      <figure className="w-12 h-12">
        <img
          className="rounded-full"
          src={review.reviewerImage}
          alt={review._id}
        />
      </figure>
      <div className="flex flex-col gap-4">
        <h1>{review.reviewerName}</h1>
        <p>{review.comment}</p>
        <Rating value={review.rating} readOnly style={{ maxWidth: 100 }} />
        <span>{review.timeStamp}</span>
      </div>
    </div>
  );
}

export default ReviewList;
