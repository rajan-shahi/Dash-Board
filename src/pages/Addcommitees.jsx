import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Addcommitees = () => {
  const [name, setname] = useState();
  const [image, setimage] = useState();
  const [position, setposition] = useState();
  const [description, setdescription] = useState();
  const [create, setcreate] = useState(false);

  const createCommittees = async (e) => {
    e.preventDefault();
    setcreate(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("position", position);
    const respones = await axios.post(
      "http://localhost:4000/api/committees",
      formData
    );

    console.log(respones);
    toast.success("Create Success");
    setcreate(false);
    setdescription("");
    setimage("");
    setname("");
    setposition("");
  };

  return (
    <form
      onSubmit={createCommittees}
      className=" flex flex-col gap-4 py-10 px-10"
    >
      <input
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
        className=" w-full  px-2 border object-cover border-blue-400 py-4 "
        placeholder="Enter Name"
        required
      />{" "}
      <input
        type="file"
        onChange={(e) => setimage(e.target.files[0])}
        className=" w-full  px-2 border object-cover border-blue-400 py-4 "
        placeholder="Image"
        required
      />{" "}
      <input
        value={position}
        onChange={(e) => setposition(e.target.value)}
        type="text"
        className=" w-full  px-2 border object-cover border-blue-400 py-4 "
        placeholder="Position"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        className=" h-40  px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter Description"
        required
      />
      <button type="submit" className=" bg-blue-500 text-white py-2">
        {create ? "Creating" : " create"}
      </button>
    </form>
  );
};

export default Addcommitees;
