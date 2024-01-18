import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CommitteeEdit = () => {
  const [Committee, setCommittee] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchCommitteeItems = async () => {
      const respones = await axios.get(
        `http://localhost:4000/api/committees/${id}`
      );
      setCommittee(respones.data.data);
    };
    fetchCommitteeItems();
  }, [id]);

  console.log(Committee);

  return (
    <form className=" flex flex-col gap-4 py-10 px-10">
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        name="email"
        defaultValue={Committee.name}
        required
      />

      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        defaultValue={Committee.position}
      />
      <img className=" h-20 w-20 object-cover" src={Committee.image} alt="" />
      <input
        className="px-2 border  border-blue-400 py-3"
        type="text"
        defaultValue={Committee.description}
      />
      <input type="file" />
      <p>{Committee.createdAt}</p>
      <p>{Committee.updatedAt}</p>
      <button type="submit" className=" bg-blue-500 text-white py-2">
        create
      </button>
    </form>
  );
};

export default CommitteeEdit;
