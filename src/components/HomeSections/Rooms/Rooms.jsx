import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import "./rooms.styles.css";
import { Link } from "react-router-dom";

function Rooms() {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

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

      <LightGallery
        elementClassNames="rooms-class"
        onBeforeSlide={onBeforeSlide}
      >
        <a href="background1.jpg">
          <img
            alt="background1"
            src="background1.jpg"
            className="border rounded w-full h-64"
          />
        </a>
        <a href="background2.jpg">
          <img
            alt="background2"
            src="background2.jpg"
            className="border rounded w-full h-64"
          />
        </a>
        <a href="background3.jpg">
          <img
            alt="background3"
            src="background3.jpg"
            className="border rounded w-full h-64"
          />
        </a>
        <a href="background4.jpg">
          <img
            alt="background4"
            src="background4.jpg"
            className="border rounded w-full h-64"
          />
        </a>
      </LightGallery>
    </>
  );
}

export default Rooms;
