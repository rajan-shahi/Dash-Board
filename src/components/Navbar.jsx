import React from "react";
import { BsSortDown } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className=" fixed z-0 bg-white left-0 right-0 flex items-center justify-between shadow-md  px-10">
      <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;Everest&nbsp;</span>
        <span aria-hidden="true" class="hover-text">
          &nbsp;Everest&nbsp;
        </span>
      </button>
      <div className=" text-md cursor-pointer underlin text-gray-500 hover:scale-105 duration-500 hover:text-gray-700">
        <span className=" text-blue-700 text-md">Emerjency:- </span>01245623
      </div>
      <div className=" text-md cursor-pointer underlin text-gray-500 hover:scale-105 duration-500 hover:text-gray-700">
        <span className=" text-blue-700  text-md">Contact:- </span>9866448106
      </div>
      <div className=" text-md cursor-pointer underlin text-gray-500 hover:scale-105 duration-500 hover:text-gray-700">
        <span className=" text-blue-700  text-md">Location:- </span>Kathmandu
        Nepal
      </div>
      <div className=" text-md cursor-pointer underlin text-gray-500 hover:scale-105 duration-500 hover:text-gray-700">
        <span className=" text-blue-700  text-md">Email:- </span>
        everesthps@gmail.com
      </div>
      <div>
        <span className=" px-20  text-blue-700 cursor-pointer  hover:scale-y-110">
          <BsSortDown size={30} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
