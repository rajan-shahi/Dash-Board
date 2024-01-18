import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Aboutedit = () => {
  const [about, setabout] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchAboutItems = async () => {
      const respones = await axios.get(
        `http://localhost:4000/api/about-sections/${id}`
      );
      setabout(respones.data.data);
    };
    fetchAboutItems();
  }, [id]);

  console.log(about);

  return (
    <div>
      <form className=" flex flex-col gap-4 py-10 px-10">
        <input
          className="  px-2 border  border-blue-400 py-3 "
          type="text"
          defaultValue={about.description}
          placeholder="Enter Your Question"
          required
        />
        <img
          className=" h-24 w-24  px-2 border border-blue-400 py-3 "
          src={about.image}
          alt=""
        />
        <input className="  px-2 border  border-blue-400 py-3 " type="file" />
        <p>{about.createdAt}</p>
        <p>{about.updatedAt}</p>
        <button type="submit" className=" bg-blue-500 text-white py-2">
          create
        </button>
      </form>
    </div>
  );
};

export default Aboutedit;
