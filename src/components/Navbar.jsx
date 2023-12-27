import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between    py-3 shadow-md  px-10">
      <img
        className=" cursor-pointer h-10 md:w-52 w-40 object-cover "
        src={Logo}
        alt=""
      />
      <div className=" text-xl cursor-pointer underline text-blue-700">
        Hospital Dashboard
      </div>
      <div>
        <span className=" px-20  text-blue-700 cursor-pointer">
          <FaArrowRightFromBracket size={20} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
