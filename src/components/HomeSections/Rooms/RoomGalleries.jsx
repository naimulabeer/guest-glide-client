import "./room-galleries.styles.css";
import useRooms from "../../../hooks/useRooms";
import { Link } from "react-router-dom";

function RoomGalleries() {
  const rooms = useRooms();
  const featuredRooms = rooms.slice(0, 4);

  return (
    <div className="explore-rooms">
      <div
        className="room-cards"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        {featuredRooms.map((room) => (
          <Link to={`/room/${room._id}`} key={room._id} className="room-card">
            <img src={room.images[0]} alt={room.name} className="room-image" />

            <div className="room-details">
              <h3 className="room-name">{room.name}</h3>
              <p className="room-description">{room.description}</p>
              <p className="room-price">
                Price per night: ${room.price_per_night}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RoomGalleries;
