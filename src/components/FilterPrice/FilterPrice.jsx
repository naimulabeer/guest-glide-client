/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { AwesomeButton } from "react-awesome-button";

function FilterPrice({ rooms, setFilteredRooms }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    const filteredRooms = rooms.filter((room) => {
      const roomPrice = room.price_per_night;
      if (
        (!minPrice || roomPrice >= minPrice) &&
        (!maxPrice || roomPrice <= maxPrice)
      ) {
        return true;
      }
      return false;
    });

    setFilteredRooms(filteredRooms);
  };

  const clearFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    setFilteredRooms(rooms);
  };

  return (
    <div className="h-fit md:px-4 md:py-6 mt-10  border border-gray-200">
      <h2 className="text-xl font-bold">Filtered By Price</h2>

      <div className=" mt-5">
        <div className="w-2/3">
          <Slider
            range
            min={0}
            max={1000}
            value={[minPrice, maxPrice]}
            onChange={(values) => {
              setMinPrice(values[0]);
              setMaxPrice(values[1]);
            }}
          />
        </div>
      </div>

      <div className="flex gap-4 mt-4 mb-4">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border border-slate-400 px-2 w-1/3 py-2 ring-2 ring-slate-300 hover:ring-slate-500"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border border-slate-400 w-1/3 px-2 py-2 ring-2 ring-slate-300 hover:ring-slate-500"
        />
      </div>
      <div className="flex gap-4">
        <AwesomeButton type="primary">
          <button onClick={handleFilter}>Apply</button>
        </AwesomeButton>
        <AwesomeButton type="secondary" onPress={clearFilter}>
          <button onClick={clearFilter}>Clear</button>
        </AwesomeButton>
      </div>
    </div>
  );
}

export default FilterPrice;
