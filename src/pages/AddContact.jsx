import React from "react";

const AddContact = () => {
  return (
    <div className=" flex flex-col gap-4 py-10 px-10">
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter EmergencyHotline"
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        placeholder="Enter EmergencyAmbulanceHotline"
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        placeholder="Enter hospitalNumber"
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        placeholder="Enter heliRescueNumber"
      />

      <button className=" bg-blue-500 text-white py-2">Create</button>
    </div>
  );
};

export default AddContact;
