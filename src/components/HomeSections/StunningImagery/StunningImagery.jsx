import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation";
import { AwesomeButton } from "react-awesome-button";
import "./stunningImagery.styles.css";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";

function StunningImagery() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={2000}
        animation="foldOutAnimation"
        cssModule={[AnimationStyles, CoreStyles]}
        media={[
          {
            source: "/imagery1.jpg",
          },
          {
            source: "/imagery2.jpg",
          },
          {
            source: "/imagery3.jpg",
          },
        ]}
      />
      <div className="absolute md:top-40  inset-0  md:right-10 flex flex-col gap-4 items-center justify-center">
        <h1 className="md:text-6xl text-xl text-slate-100 uppercase mb-4">
          Book Early
        </h1>
        <h2 className="md:text-5xl text-xl uppercase text-slate-200 md:mb-10">
          Save More
        </h2>

        <Link to="rooms">
          <AwesomeButton
            className="aws-btn"
            style={{ width: 200 }}
            type="primary"
          >
            Explore
          </AwesomeButton>
        </Link>
      </div>
    </>
  );
}

export default StunningImagery;
