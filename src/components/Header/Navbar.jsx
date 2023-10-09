import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provide/AuthProvide";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        return swal(
          "Thanks for visiting the site",
          "Sign-out successful",
          "warning"
        );
      })
      .catch((error) => {
        return swal("Oops!", error.message, "error");
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/recent-event">Recent Event</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-[100px] md:w-[150px]" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex flex-col items-center justify-center md:mr-5">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-7 md:w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <h3 className="text-gray-700 text-xs md:text-lg font-medium ml-1 md:ml-0">
                {user?.displayName}
              </h3>
            </div>
            <button
              onClick={handleLogOut}
              className="btn hover:text-[#7B014C] bg-[#7B014C] text-[#F1EAEA]"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn hover:text-[#7B014C] bg-[#7B014C] text-[#F1EAEA]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
