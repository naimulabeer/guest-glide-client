import { ParallaxBanner } from "react-scroll-parallax";

function StunningImagery() {
  return (
    <ParallaxBanner
      layers={[{ image: "/background1.jpg", speed: -20 }]}
      className="aspect-[2]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="md:text-8xl text-white font-thin">Stunning Imagery!</h1>
      </div>
    </ParallaxBanner>
  );
}

export default StunningImagery;
