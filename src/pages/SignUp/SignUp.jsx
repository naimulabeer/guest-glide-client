import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../components/PageTitle/PageTitle";

function SignUp() {
  const { setUser, createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    //const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      return toast.error("Password should not be less than 6 character!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password should have atleast one capital character!",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      return toast.error(
        "Password should have atleast one special character!",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    }

    createUser(email, password)
      .then((result) => {
        toast.success("Successfully Signed Up 👌", {
          position: "top-center",
          autoClose: 3000,
        });

        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://i.ibb.co/XLXXTYK/passport.jpg",
        })
          .then(() => {
            const updatedUser = {
              ...result.user,
              displayName: name,
              photoURL: "https://i.ibb.co/XLXXTYK/passport.jpg",
            };
            setUser(updatedUser);
            setTimeout(() => {
              navigate(location?.state ? location.state : "/");
            }, 2000);
          })
          .catch((err) =>
            toast.error(err.message, {
              position: "top-center",
            })
          );
      })
      .catch();
  };

  const handleGoogleSignUp = () => {
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
    <div className="flex h-[120vh] bg-gray-200">
      <PageTitle title="SignUp" />
      <ToastContainer />
      <div className="m-auto md:w-[500px]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="name"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photoUrl"
              >
                Photo URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photoUrl"
                type="photoUrl"
                placeholder="PhotoURL"
                name="photoUrl"
              />
            </div>
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
            <div className="flex items-center justify-between">
              <button className="bg-slate-200 hover:bg-slate-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-6 ml-1">
            <button
              className="bg-blue-500 flex justify-center items-center hover:bg-slate-200 hover:text-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleGoogleSignUp}
            >
              <img className="w-10" src="/google.svg" alt="google" />
              Sign up with Google
            </button>
          </div>
          <div className="mt-6">
            <h1>
              Already Have an Account? <Link to="/login">Login</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
