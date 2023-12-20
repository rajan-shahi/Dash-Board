import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between    py-3 shadow-md  px-10">
      <div>logo</div>
      <div>
        <span className=" px-20  text-gray-700 cursor-pointer">
          <FaArrowRightFromBracket size={20} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
