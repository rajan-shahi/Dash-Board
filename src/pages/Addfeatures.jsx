import React from "react";

const Addfeatures = () => {
  return (
    <form className=" flex flex-col gap-4 py-10 px-10">
      <input type="text" />{" "}
      <input
        type="text"
        className=" w-full  px-2 border object-cover border-blue-400 py-4 "
        placeholder="Name"
        required
      />{" "}
      <input
        type="file"
        className=" w-full  px-2 border object-cover border-blue-400 py-4 "
        placeholder="Image"
        required
      />{" "}
      <textarea
        className=" h-40  px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter Description"
        required
      />
      <button type="submit" className=" bg-blue-500 text-white py-2">
        create
      </button>
    </form>
  );
};

export default Addfeatures;
