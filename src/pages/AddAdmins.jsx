import React, { useState } from "react";

const AddAdmins = () => {

    const [passwordShow, setpasswordShow] = useState(false);
    const TogglePassword =() =>{
        setpasswordShow(!passwordShow)
    }
  return (
    <div className=" flex flex-col gap-4 py-10 px-10">
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="emial"
        name="email"
        placeholder="Enter Your Email"
      />
      <div className=" w-full">
        <input name="password"
          className=" w-full  px-2 border border-blue-400 py-3 "
          type={passwordShow ? "text" :"password"}
          placeholder="Enter Your password"
        />{" "}
        <input onClick={TogglePassword} className=" cursor-pointer" type="checkbox" />
        <h1 className=" cursor-pointer text-md  text-gray-600">Password Show</h1>
      </div>
      <button className=" bg-blue-500 text-white py-2">delete</button>
    </div>
  );
};

export default AddAdmins;
