import { useLoaderData } from "react-router-dom";
import SwiperImage from "../../components/Swiper/Swiper";
import { GoPeople } from "react-icons/go";

function RoomDetails() {
  const roomsDetails = useLoaderData();

  // eslint-disable-next-line no-unused-vars
  const { _id, name, images, price_per_night, room_size, room_description } =
    roomsDetails;
  return (
    <div className="mt-10 mb-10">
      <SwiperImage images={images} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 flex flex-col gap-4 px-10 py-4 mt-10 ">
          <h1 className="text-4xl font-bold">{name}</h1>
          <div className="flex items-center gap-4">
            <GoPeople />
            <span className="text-lg">{room_size}</span>
          </div>
          <p className="text-2xl border-b-2  border-b-blue-500 w-fit uppercase">
            Description
          </p>
          <p className="">{room_description}</p>
        </div>
        <div className="w-full lg:w-1/3 px-10 py-4 mt-10 flex flex-col gap-2 lg:ml-10">
          <span className="text-lg font-bold">Price:</span>
          <span className="text-lg">
            <span className="font-bold">${price_per_night}</span>/night
          </span>
          <button className=" lg:w-4/5 w-1/2 px-6 py-2 font-bold uppercase border bg-amber-400 hover:bg-emerald-500">
            Book This Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
