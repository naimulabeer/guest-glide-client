/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import useReviewCount from "../../hooks/useReviewCount";

function RoomsCard({ room }) {
  const { _id, images, name, price_per_night, room_size } = room;
  const reviewCount = useReviewCount(_id);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <Link to={`/room/${_id}`}>
          <div
            data-aos="zoom-in"
            className="relative overflow-hidden bg-cover bg-no-repeat"
            style={{ width: "350px", height: "200px" }}
          >
            <img
              className="w-full h-full transition duration-300 ease-in-out hover:scale-110"
              src={images[0]}
              alt={name}
            />
          </div>
        </Link>

        <div className="">
          <h1 className="text-xl">{name}</h1>
          <span className="text-lg text-slate-500">{room_size}</span>
          <div className="flex justify-between items-center mt-6 text-slate-500">
            <div className="flex justify-start items-center self-center gap-3">
              <GoPerson />
              <h1 className="text-sm">{`${reviewCount} Reviews`}</h1>
            </div>

            <div className="flex justify-start items-center self-center gap-2 mr-5">
              <span className="">
                <span className="font-bold">${price_per_night}</span>/night
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;
