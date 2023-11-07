import { useEffect, useState } from "react";
import FilterPrice from "../../components/FilterPrice/FilterPrice";
import useRooms from "../../hooks/useRooms";
import RoomsCard from "./RoomsCard";
import PageTitle from "../../components/PageTitle/PageTitle";

function Rooms() {
  const allRooms = useRooms();
  const [filteredRooms, setFilteredRooms] = useState(allRooms);

  useEffect(() => {
    setFilteredRooms(allRooms);
  }, [allRooms]);

  return (
    <>
      <PageTitle title="Rooms" />
      <div className="mt-10 mb-10 lg:ml-10 px-10">
        <h1 className="text-3xl">Rooms</h1>
        <span>Show {filteredRooms.length} rooms</span>
        <div className="flex flex-col lg:flex-row">
          <FilterPrice rooms={allRooms} setFilteredRooms={setFilteredRooms} />
          <div className="grid md:grid-cols-2 lg:w-2/3 md:gap-10 gap-5 mt-10 mb-10">
            {filteredRooms.map((room) => (
              <RoomsCard key={room._id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
