import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Offers from "../../components/HomeSections/Offers/Offers";
import Rooms from "../../components/HomeSections/Rooms/Rooms";
import StunningImagery from "../../components/HomeSections/StunningImagery/StunningImagery";
import Newsletter from "../../components/Newsletter/Newsletter";
import PageTitle from "../../components/PageTitle/PageTitle";
import Loader from "../../components/Loading/Loader";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      <PageTitle title="Home" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <StunningImagery />
          <Offers />
          <Newsletter />
          <Rooms />
        </>
      )}
    </>
  );
}

export default Home;
