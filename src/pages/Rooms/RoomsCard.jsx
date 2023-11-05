/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoPerson } from "react-icons/go";

function RoomsCard({ room }) {
  const { _id, images, name, price_per_night, room_size } = room;
  return (
    <div>
      <div className="flex flex-col gap-5">
        <figure
          className="relative overflow-hidden bg-cover bg-no-repeat"
          style={{ width: "350px", height: "200px" }}
        >
          <img
            className="w-full h-full transition duration-300 ease-in-out hover:scale-110"
            src={images[0]}
            alt={name}
          />
        </figure>

        <div className="ml-5">
          <h1 className="text-xl">{name}</h1>
          <span className="text-lg text-slate-500">{room_size}</span>
          <div className="flex justify-start items-center gap-2 mt-6 text-slate-500">
            <GoPerson />
            <h1>Person</h1>
            <span className="ml-20">
              <span className="font-bold">${price_per_night}</span>/night
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;
