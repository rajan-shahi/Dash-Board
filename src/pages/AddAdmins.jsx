import axios from "axios";
import React, { useState } from "react";

const AddAdmins = () => {
  const [passwordShow, setpasswordShow] = useState(false);
  const TogglePassword = () => {
    setpasswordShow(!passwordShow);
  };

  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const createAdmins = async () => {
    const respones = await axios.post("http://localhost:4000/api/admins/register", {
      email: email,
      password: password,
    });
    console.log(respones);
  };
  

  return (
    <div className=" flex flex-col gap-4 py-10 px-10">
      <input
        value={email}
        onChange={(e) => setemail(e.target.value)}
        className="  px-2 border  border-blue-400 py-3 "
        type="emial"
        name="email"
        placeholder="Enter Your Email"
      />
      <div className=" w-full">
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          name="password"
          className=" w-full  px-2 border border-blue-400 py-3 "
          type={passwordShow ? "text" : "password"}
          placeholder="Enter Your password"
        />{" "}
        <input
          onClick={TogglePassword}
          className=" cursor-pointer"
          type="checkbox"
        />
        <h1 className=" cursor-pointer text-md  text-gray-600">
          Password Show
        </h1>
      </div>
      <button onClick={createAdmins} className=" bg-blue-500 text-white py-2">
        create
      </button>
    </div>
  );
};

export default AddAdmins;
