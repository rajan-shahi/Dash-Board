import axios from "axios";
import React, { useState } from "react";

const AddTestmoniorial = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  const createstmonial = async () => {
    const response = await axios.post(
      "http://localhost:4000/api/testimonials",
      { name: name, description: description }
    );
    console.log(response)
  };

//   faqs

  return (
    <div className=" flex flex-col gap-4 py-10 px-10">
      <input
        className=" border  border-blue-400 py-3 placeholder:px-4"
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter Your Name"
      />
      <input
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        className=" border  border-blue-400 py-3 placeholder:px-4"
        type="text"
        placeholder="Enter Description"
      />
      <button onClick={createstmonial} className=" bg-blue-500 text-white py-2">
        Creater
      </button>
    </div>
  );
};

export default AddTestmoniorial;
