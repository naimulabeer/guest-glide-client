import Header from "../../components/Header/Header";
import Offers from "../../components/HomeSections/Offers/Offers";
import Rooms from "../../components/HomeSections/Rooms/Rooms";
import StunningImagery from "../../components/HomeSections/StunningImagery/StunningImagery";
import Newsletter from "../../components/Newsletter/Newsletter";
import PageTitle from "../../components/PageTitle/PageTitle";

function Home() {
  return (
    <>
      <PageTitle title="Home" />
      <Header />
      <StunningImagery />
      <Offers />
      <Newsletter />
      <Rooms />
    </>
  );
}

export default Home;
