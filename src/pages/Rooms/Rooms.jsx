import PaginatedItems from "../../components/Pagination/Pagination";
import useRooms from "../../hooks/useRooms";
import RoomsCard from "./RoomsCard";

function Rooms() {
  const rooms = useRooms();
  return (
    <>
      <div className="mt-10 mb-10 lg:ml-10 px-10">
        <h1 className="text-3xl">Rooms</h1>
        <span>Show 1-6 of 12</span>
        <div className="flex flex-col lg:flex-row">
          <div className="grid md:grid-cols-2 lg:w-2/3 md:gap-10 gap-5 mt-10 mb-10">
            {rooms.map((room) => (
              <RoomsCard key={room._id} room={room} />
            ))}
          </div>
          <div className="w-full lg:w-1/3 px-4 py-4 mt-10 shadow-md  rounded-lg">
            <div className="bg-white">
              <h2 className="text-lg font-semibold mb-4">Filter by Price</h2>

              <div className="mb-2">
                <label className="mr-2">Price Range:</label>
                <span>0</span> - <span>500</span>
              </div>

              <input
                type="range"
                min={0}
                max="100"
                value="40"
                className="range range-accent range-xs"
              />
            </div>
            <button className="bg-slate-200 px-2 py-2 text-teal-500">
              Apply
            </button>
          </div>
        </div>
        <PaginatedItems />
      </div>
    </>
  );
}

export default Rooms;
