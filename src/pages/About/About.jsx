import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2">
          <img
            src="/about1.jpg"
            alt="About Craft Clothing"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 lg:pl-12 px-2 mt-4 lg:mt-0">
          <h1 className="md:text-3xl font-medium text-gray-800 mb-4">
            Welcome to Guest Glide
          </h1>
          <h1 className="md:text-4xl font-bold">Beach Paradise</h1>
          <p className="text-gray-600 mt-10">
            GuestGlide is your ultimate gateway to a beach paradise. Our website
            is designed to provide a seamless and immersive experience for
            travelers seeking the perfect coastal escape. Whether you are a
            sun-worshiper, an adventurer, or a relaxation enthusiast, GuestGlide
            has your dream beach vacation covered.
          </p>
          <div className="flex gap-10  mt-10 mb-10">
            <div className="flex gap-2 items-center">
              <img
                className="w-6 h-6 lg:w-10 lg:h-10"
                src="/vacation.svg"
                alt="vacation"
              />
              <p>Realistic Summer Vacation</p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-10 h-10" src="/hotel.svg" alt="hotel" />
              <p>5 Star Luxury Motel</p>
            </div>
          </div>
          <Link to="/rooms">
            <button className="bg-teal-500 md:px-14 md:py-4 px-5 py-2 text-slate-200 hover:bg-teal-700 text-lg font-bold uppercase transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
              Discover More
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-2 py-8 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <h2 className="md:text-3xl font-bold text-gray-800 mb-4">
            Our Attitude
          </h2>
          <p className="text-gray-600">
            With a user-friendly interface, our website offers a curated
            selection of beachfront accommodations, from luxurious oceanfront
            resorts to cozy seaside cottages. You can browse through stunning
            imagery and detailed descriptions to find the perfect retreat for
            your getaway. GuestGlide also goes the extra mile in helping you
            plan your beach vacation. We provide valuable travel guides, insider
            tips, and local recommendations, ensuring that you make the most of
            your beach paradise experience. Whether it is discovering hidden
            beaches, indulging in fresh seafood, or trying water sports, our
            website has it all.
          </p>
        </div>

        <div className="lg:w-2/3 lg:pl-12">
          <img
            src="/about2.jpg"
            alt="Our Attitude"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default About;
