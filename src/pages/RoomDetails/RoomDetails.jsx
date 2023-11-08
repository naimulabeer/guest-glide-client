import { Link, useLoaderData } from "react-router-dom";
import SwiperImage from "../../components/Swiper/Swiper";
import { GoPeople } from "react-icons/go";
import ShowReviews from "../../components/Review/ShowReviews";
import { useEffect, useState } from "react";
import Loader from "../../components/Loading/Loader";

function RoomDetails() {
  const roomsDetails = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const {
    _id,
    name,
    images,
    price_per_night,
    room_size,
    room_description,
    available_seats,
  } = roomsDetails;
  return (
    <div className="mt-10 mb-10">
      {loading ? (
        <Loader />
      ) : (
        <>
          <SwiperImage images={images} />
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 flex flex-col gap-4 px-10 py-4 mt-10 ">
              <h1 className="text-4xl font-bold">{name}</h1>
              <div className="flex items-center gap-4">
                <GoPeople />
                <span className="text-lg">{room_size}</span>
              </div>
              <p className="text-2xl uppercase">Description</p>
              <div className="bg-blue-500 w-[118px] h-[2px] mb-10"></div>

              <p className="text-lg text-slate-700">{room_description}</p>
              <p className="text-lg">Availablity: {available_seats}</p>
            </div>
            <div className="w-full lg:w-1/3 px-10 py-4 mt-10 flex flex-col gap-2 lg:ml-10">
              <span className="text-lg font-bold">Price:</span>
              <span className="text-lg">
                <span className="font-bold">${price_per_night}</span>/night
              </span>
              <Link
                to={`/room/${_id}/bookingPage`}
                className=" lg:w-4/5 w-1/2 px-6 text-center py-2 font-bold uppercase border bg-amber-400 hover:bg-emerald-500"
              >
                Book This Room
              </Link>
            </div>
          </div>
          <ShowReviews roomsDetails={roomsDetails} />
        </>
      )}
    </div>
  );
}

export default RoomDetails;
