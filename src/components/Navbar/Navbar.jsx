import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import "./navbar.styles.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const links = (
    <nav
      id="sidebar"
      className="flex flex-col uppercase lg:flex-row lg:gap-10 gap-2"
    >
      <NavLink to="/">Home</NavLink>

      <NavLink to="/rooms">Rooms</NavLink>

      <NavLink to="/myBookings">My Bookings</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/faq">FAQ</NavLink>
    </nav>
  );

  return (
    <div className=" md:font-bold sticky top-0 z-10">
      <div className="navbar bg-slate-900 text-slate-100 px-4 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-slate-900 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className=" items-center flex gap-2">
            <img src="/guestGlideLogo.png" alt="logo" />
            <h1 className="hidden lg:block lg:text-sm italic font-bold">
              GuestGlide
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="userphoto" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-slate-900 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>

                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className=" md:w-1/2 flex gap-5 items-center">
              <NavLink className="hover:text-blue-600" to="/login">
                Log in
              </NavLink>
              <NavLink
                className=" bg-zinc-200 px-4 py-2 text-black hover:bg-zinc-500 hover:text-slate-900"
                to="/signup"
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
