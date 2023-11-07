import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReactTextareaAutosize from "react-textarea-autosize";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

function ReviewPage() {
  const room = useLoaderData();
  const { _id, name, images } = room;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user?.displayName;
    const timeStamp = moment(Date.now()).format("MMM D, YYYY h:mm A");
    const comment = form.comment.value;
    const review = {
      reviewerName: userName,
      timeStamp,
      comment,
      rating,
    };
    console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Added Review", {
            position: "top-center",
            autoClose: 5000,
          });
          setTimeout(() => {
            navigate("/myBookings");
          }, 3000);
        }
      });
  };

  return (
    <div className="mt-10 mb-10">
      <ToastContainer />
      <h1 className="px-2 text-center uppercase text-2xl font-bold">
        Give a Review about {name}.
      </h1>

      <div className="flex flex-col md:items-center lg:items-start lg:flex-row mt-4">
        <div className="w-fit lg:h-96 px-10">
          <img
            src={images[0]}
            alt={_id}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <form onSubmit={handleAddReview}>
          <div className="w-full bg-white rounded-lg p-8 shadow-md mb-10">
            <div className="flex items-center mb-4">
              <input
                type="text"
                name="name"
                id="name"
                value="Abeer"
                className="w-fit py-2 px-3 border border-slate-200 focus:outline-none focus:border-blue-500 transition-all duration-200"
                disabled
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <div className="text-3xl font-semibold text-blue-500 mr-2">
                  {rating.toFixed(1)}
                </div>
                <div>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    onChange={(value) => setRating(value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <ReactTextareaAutosize
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full mb-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Write your review here..."
                minRows={5}
                style={{ width: 350 }}
              />

              {/* <div className="text-gray-600">
            {moment(Date.now()).format("MMM D, YYYY h:mm A")}
          </div> */}
              <AwesomeButton type="primary">Add Review</AwesomeButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewPage;
