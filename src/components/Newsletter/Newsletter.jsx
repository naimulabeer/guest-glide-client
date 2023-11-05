const Newsletter = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-16 mt-10"
      style={{ backgroundImage: `url('background5.jpg')` }}
    >
      <div className="bg-slate-800 bg-opacity-70 p-6 rounded-md max-w-sm mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md text-black"
            />
          </div>
          <button className="bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
