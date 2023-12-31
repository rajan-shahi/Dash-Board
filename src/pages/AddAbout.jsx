import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddAbout = () => {
  const [create, setcreate] = useState();
  const [description, setdescription] = useState();
  const [image, setimage] = useState();

  const createAbout = async (e) => {
    setcreate(true);
    e.preventDefault();
    const respones = await axios.get(
      "http://localhost:4000/api/about-sections",
      {
        description: description,
        image: image,
      }
    );
    setcreate(false);
    toast.success("Create Success");
    console.log(respones);
    setdescription("");
    setimage("");
  };

  return (
    <form onSubmit={createAbout} className=" flex flex-col gap-4 py-10 px-10">
      <textarea
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        className=" h-40  px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter Description"
        required
      />
      <input
        type="image"
        value={image}
        onChange={(e) => setimage(e.target.value)}
        alt=""
        className=" w-full  px-2 border border-blue-400 py-4 "
        placeholder="Image"
        required
      />{" "}
      <button type="submit" className=" bg-blue-500 text-white py-2">
        {create ? "creating" : "create"}
      </button>
    </form>
  );
};

export default AddAbout;
