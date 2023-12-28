import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddTestmoniorial = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  const [creating, setcreating] = useState(false);
  const createstmonial = async () => {
    setcreating(true);
    const response = await axios.post(
      "http://localhost:4000/api/testimonials",
      { name: name, description: description }
    );
    {
      response.status === 201 && toast.success(response.data.msg);
    }

    setcreating(false);
    console.log(response);
    setname("");
    setdescription("");
  };
  console.log(creating);

  return (
    <div className=" flex flex-col gap-4 py-10 px-10">
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter Your Name"
      />
      <input
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        className=" px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter Description"
      />
      <button onClick={createstmonial} className=" bg-blue-500 text-white py-2">
        {creating ? "posting.." : "Create"}
      </button>
    </div>
  );
};

export default AddTestmoniorial;
