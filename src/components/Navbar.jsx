import React from "react";
import { BsSortDown } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" fixed z-0 bg-white left-0 right-0 flex items-center justify-between shadow-md  px-10">
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
          <BsSortDown size={30} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
