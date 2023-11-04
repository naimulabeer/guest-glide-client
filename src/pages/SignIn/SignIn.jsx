import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const { setUser, signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        toast.success("Successfully Logged In!", {
          position: "top-center",
          autoClose: 5000,
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((err) =>
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
        })
      );
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        toast.success("Successfully Signed Up With Google", {
          position: "top-center",
          autoClose: 3000,
        });
        setUser(loggedInUser);
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((err) => toast.error(err.message, { position: "top-center" }));
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <ToastContainer />
      <div className="m-auto md:w-[500px]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="">
              <button className="bg-slate-200 hover:bg-slate-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Log in
              </button>
            </div>
          </form>
          <div className="mt-6 ml-1">
            <button
              className="bg-blue-500 flex justify-center items-center hover:bg-slate-200 hover:text-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <img className="w-10" src="/google.svg" alt="google" />
              Login With Google
            </button>
          </div>
          <div className="mt-6">
            <h1>
              Dont Have an Account? <Link to="/signup">Sign up</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
