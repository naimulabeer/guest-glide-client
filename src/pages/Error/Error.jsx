import { Link, useNavigate } from "react-router-dom";
import "./error.styles.css";

import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/error.webp" alt="Error" className="max-w-md w-full h-auto" />
      <h1 className="text-4xl font-bold mt-4">
        Sorry, we could not find the page you are looking for.
      </h1>
      <div className="flex">
        <button className="btn" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20} />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
}
export default Error;
