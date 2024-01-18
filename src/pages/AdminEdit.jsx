import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AdminEdit = () => {
  const [admin, setadmin] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchAboutItems = async () => {
      const respones = await axios.get(
        `http://localhost:4000/api/admins/${id}`
      );
      setadmin(respones.data.data);
    };
    fetchAboutItems();
  }, [id]);

  console.log(admin);
  return (
    <form className=" flex flex-col gap-4 py-10 px-10">
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        name="email"
        defaultValue={admin.email}
        placeholder="Enter Your email"
        required
      />

      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        defaultValue={admin.password}
      />

      <p>{admin.createdAt}</p>
      <p>{admin.updatedAt}</p>
      <button type="submit" className=" bg-blue-500 text-white py-2">
        create
      </button>
    </form>
  );
};

export default AdminEdit;
