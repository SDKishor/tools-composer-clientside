import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import CustomLink from "../hooks/CustomLink";

export default function Header() {
  const [user, loading, error] = useAuthState(auth);

  const menuItems = (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}
      <li>
        <CustomLink to="/Purchase">Purchase</CustomLink>
      </li>
      <li>
        <CustomLink to="/blogs">Blogs</CustomLink>
      </li>
      <li>
        <CustomLink to="/myportfolio">My Portfolio</CustomLink>
      </li>
    </>
  );

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("accessToker");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start mx-5">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Tool <span className="text-primary pl-1 font-bold">Composer </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end mx-5">
        {user ? (
          <p className="btn btn-ghost mr-2 hidden sm:inline-flex ">
            {user?.displayName?.split(" ")[0]}
          </p>
        ) : (
          <Link to={"/login"} className="btn btn-ghost mr-2">
            Log In
          </Link>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary font-bold text-white"
          >
            Sign Out
          </button>
        ) : (
          <Link to={"/signup"} className="btn btn-primary font-bold text-white">
            Get started
          </Link>
        )}
      </div>
    </div>
  );
}
