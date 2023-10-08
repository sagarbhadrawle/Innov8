import { Link } from "react-router-dom";
import { log } from "../assets";

const Navbar = () => {
  return (
    <div className=" bg-blue-900 p-3 flex justify-between items-center text-white border-b-4 border-blue-800">
      <Link to="/">
        <img src={log} alt="logo" className="w-10" />
      </Link>
      <div className=" w-[40rem] flex justify-around items-center align-middle text-center">
        <Link
          to="/interview"
          className="nav-link w-[8rem] hover:bg-sky-500 hover:rounded-full p-1"
        >
          Practice
        </Link>
        <Link
          to="/dashboard"
          className="nav-link w-[8rem] hover:bg-sky-500 hover:rounded-full p-1"
        >
          DashBoard
        </Link>
        <Link
          to="/login"
          className="nav-link w-[8rem] hover:bg-sky-500 hover:rounded-full p-1"
        >
          Login
        </Link>
        <button className="bg-sky-500 p-1 w-[10rem] rounded-full hover:shadow-md hover:font-semibold  hover:shadow-white">
          Try for Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
