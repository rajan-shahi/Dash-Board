import React from "react";

export default function AddDoctors() {
  return (
    <form className=" flex flex-col gap-4 py-10 px-10">
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter Your Name"
        required
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="email"
        placeholder="Enter Your Email"
        required
      />
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="number"
        placeholder="Enter Your Phone Number"
        required
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        placeholder="Enter Your Position"
        required
      />
      <button type="submit" className=" bg-blue-500 text-white py-2">
        create
      </button>
    </form>
  );
}
