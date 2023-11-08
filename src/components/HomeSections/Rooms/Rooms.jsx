import { Link } from "react-router-dom";
import LightGalleries from "./LightGalleries";
import RoomGalleries from "./RoomGalleries";

function Rooms() {
  return (
    <>
      <div className="mt-10 flex flex-col gap-5 ">
        <h1 className="text-5xl text-center uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-800">
          Featured Rooms
        </h1>
        <div className="text-center">
          <Link
            to="/rooms"
            className="text-xl border-t-2 border-b-2 border-t-cyan-700 border-b-cyan-700 uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-800 inline-flex items-center justify-center w-fit"
          >
            Explore Rooms
          </Link>
        </div>
      </div>
      <RoomGalleries />
      <LightGalleries />
    </>
  );
}

export default Rooms;
