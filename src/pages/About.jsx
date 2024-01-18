import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const About = () => {
  const [deleting, setdeleting] = useState();
  const [refresh, setrefresh] = useState(0);
  const [about, setabout] = useState([]);

  useEffect(() => {
    const fetchAboutItems = async () => {
      const respones = await axios.get(
        "http://localhost:4000/api/about-sections"
      );
      setabout(respones.data.data);
    };
    fetchAboutItems();
    setrefresh(0);
  }, [refresh]);

  const DeleteAboutItems = async (_id) => {
    setdeleting(true);
    const responses = await axios.delete(
      `http://localhost:4000/api/about-sections/${_id}`
    );
    console.log(responses);
    toast.success("Delete Success");
    setdeleting(false);
    setrefresh(1);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">About</h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3">
          <Link
            to={"/addabout"}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add About
          </Link>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {about.map((about, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {about.description}
                </td>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img
                    alt=""
                    src={about.image}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <Link
                    to={`/about-edit/${about._id}`}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => DeleteAboutItems(about._id)}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    {deleting ? "Deleting " : "delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
