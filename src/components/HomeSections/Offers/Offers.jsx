function Offers() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white mt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb-4">Special Offers</h2>
          <p className="text-lg mb-6">
            Discover our latest discounts and promotions.
          </p>
          <a
            href="/special-offers"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 hover:text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-md"
          >
            Explore Offers
          </a>
        </div>
      </div>
    </div>
  );
}

export default Offers;
