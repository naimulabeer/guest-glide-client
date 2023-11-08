import { AwesomeButton } from "react-awesome-button";

function Offers() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white mt-20 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb-4">Special Offers</h2>
          <p className="text-lg mb-6">
            Discover our latest discounts and promotions.
          </p>
          <AwesomeButton
            type="primary"
            size="large"
            disabled
            style={{ opacity: 0.6 }}
            loading={false}
            ripple
          >
            Explore Offers
          </AwesomeButton>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full -top-10 -left-10 animate-spin-slow"></div>
        <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full top-20 -right-10 animate-spin-slow"></div>
        <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full top-40 -left-10 animate-spin-slow"></div>
        <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full -top-20 right-0 animate-spin-slow"></div>
      </div>
    </div>
  );
}

export default Offers;
