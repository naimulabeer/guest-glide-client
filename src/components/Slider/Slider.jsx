import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const slider = (
  <AwesomeSlider
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
);

export default slider;
