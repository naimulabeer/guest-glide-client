import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./rooms.styles.css";
import LightGallery from "lightgallery/react";

function LightGalleries() {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  return (
    <>
      <div className="mt-10">
        <h1 className="text-5xl text-center uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-700">
          Gallery
        </h1>
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

export default LightGalleries;
