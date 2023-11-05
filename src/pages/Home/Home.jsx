import Offers from "../../components/HomeSections/Offers/Offers";
import Rooms from "../../components/HomeSections/Rooms/Rooms";
import StunningImagery from "../../components/HomeSections/StunningImagery/StunningImagery";
import Newsletter from "../../components/Newsletter/Newsletter";

function Home() {
  return (
    <>
      <StunningImagery />
      <Offers />
      <Newsletter />
      <Rooms />
    </>
  );
}

export default Home;
