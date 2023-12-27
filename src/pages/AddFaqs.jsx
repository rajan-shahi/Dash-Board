import React from "react";

const AddFaqs = () => {
  return (
    <div className=" flex flex-col gap-4 py-10 px-10">
      <input
        className=" border  border-blue-400 py-3 placeholder:px-4"
        type="text"
        placeholder="Enter Your Question"
      />
      <input
        className=" border border-blue-400 py-3 placeholder:px-4"
        type="text"
        placeholder="Enter Your Answer"
      />
      <button className=" bg-blue-500 text-white py-2">Creater</button>
    </div>
  );
};

export default AddFaqs;
