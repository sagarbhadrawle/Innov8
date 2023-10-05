import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <div className="px-2 py-2 flex flex-1 justify-around items-center font-serif font-semibold hover:color-blue shadow-lg">
      <Link to="/">
        <img src={logo} alt="logo" className="w-10" />
      </Link>
      <Link to="/interview" className="nav-link">
        Practice
      </Link>
      <Link to="/dashboard" className="nav-link">
        DashBoard
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
