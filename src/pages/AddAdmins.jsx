import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddAdmins = () => {
  const [creat, setcreat] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  
  const [passwordShow, setpasswordShow] = useState(false);

  const TogglePassword = () => {
    setpasswordShow(!passwordShow);
  };

  const createAdmins = async (e) => {
    e.preventDefault();
    setcreat(true);

    const respones = await axios.post(
      "http://localhost:4000/api/admins/register",
      {
        email: email,
        password: password,
      }
    );
    setcreat(false);
    console.log(respones);
    toast.success("Created Success");
    setemail("");
    setpassword("");
  };

  return (
    <form onSubmit={createAdmins} className=" flex flex-col gap-4 py-10 px-10">
      <input
        value={email}
        onChange={(e) => setemail(e.target.value)}
        className="  px-2 border  border-blue-400 py-3 "
        type="email"
        name="email"
        placeholder="Enter Your Email"
        required
      />
      <div className=" w-full">
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          name="password"
          className=" w-full  px-2 border border-blue-400 py-3 "
          type={passwordShow ? "text" : "password"}
          placeholder="Enter Your password"
          required
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
      <button type="submit" className=" bg-blue-500 text-white py-2">
        {creat ? "creating" : "create"}
      </button>
    </form>
  );
};

export default AddAdmins;
