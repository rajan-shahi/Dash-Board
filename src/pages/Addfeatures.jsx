import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Addfeatures = () => {
  const [create, setcreate] = useState();
  const [name, setname] = useState();
  const [image, setimage] = useState();
  const [description, setdescription] = useState();

  const createFeatures = async (e) => {
    e.preventDefault();
    setcreate(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }
    const respones = await axios.post(
      "http://localhost:4000/api/features ",
      formData
    );
    setcreate(false);
    console.log(respones);
    toast.success("Create Success");
    setdescription("");
    setimage("");
    setname("");
  };

  return (
    <form
      onSubmit={createFeatures}
      className=" flex flex-col gap-4 py-10 px-10"
    >
      <input
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
        className=" w-full  px-2 border object-cover border-blue-400 py-4 "
        placeholder="Name"
        required
      />{" "}
      <input
        type="file"
        onChange={(e) => setimage(e.target.files[0])}
        className=" w-full  px-2 border object-cover border-blue-400 py-4 "
        placeholder="Image"
        required
      />{" "}
      <textarea
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        className=" h-40  px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter Description"
        required
      />
      <button type="submit" className=" bg-blue-500 text-white py-2">
        {create ? <p className="  text-red-600">creating </p> : "create"}
      </button>
    </form>
  );
};

export default Addfeatures;
