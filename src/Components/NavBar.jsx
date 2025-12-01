import React, { useContext } from "react";
import { Link, Links, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProviter";
import { toast } from "react-toastify";

const NavBar = () => {
  const { suser, singOut, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelSingOut = () => {
    singOut()
      .then(() => {
        setUser(null);
        navigate("/");
        toast.success("sign out successful");
        suser(null);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm border-0 ">
      <div className=" w-11/12 mx-auto">
        <div className="navbar-start space-x-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <Link className={"btn btn-ghost text-xl"} to={"/"}>
            Gamehub
          </Link>
          <NavLink to={"/"} className={"btn"}>
            Home
          </NavLink>
          <NavLink to={"/allgames"} className={"btn"}>
            All Games
          </NavLink>
        </div>

        <div className="navbar-end gap-2">
          <NavLink to={"/contact"} className={"btn"}>
            Contact
          </NavLink>
          <NavLink to={"/support"} className={"btn"}>
            Support
          </NavLink>
          <NavLink to={"/about"} className={"btn"}>
            About Us
          </NavLink>
          <div className="space-x-2">
            {suser ? (
              <div className="flex justify-center items-center gap-2">
                {/* <p>{suser.email}</p> */}
                <Link to={"/profile"}>
                  {" "}
                  <img
                    className="w-15 h-15 rounded-full object-cover "
                    src={suser.photoURL}
                    alt=""
                  />
                </Link>
                <button onClick={handelSingOut} className={"btn"}>
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <NavLink to={"/login"} className={"btn"}>
                  Login
                </NavLink>
                <NavLink to={"/register"} className={"btn"}>
                  Registration
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
