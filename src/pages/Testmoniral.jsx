import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Testmoniral = () => {
  const [refreh, setrefreh] = useState();
  const [deleting, setdeleting] = useState(false);
  const [testmonials, setTestmonials] = useState([]);

  useEffect(() => {
    const featchAllTestimonials = async () => {
      const respones = await axios.get(
        "http://localhost:4000/api/testimonials"
      );
      setTestmonials(respones.data.data);
    };
    setrefreh(0);
    featchAllTestimonials();
  }, [refreh]);

  const deleteTestimonial = async (_id) => {
    setdeleting(true);
    const response = await axios.delete(
      `http://localhost:4000/api/testimonials/${_id}`
    );
    setrefreh(1);
    toast.success(response.data.msg);
    console.log(response);
    setdeleting(false);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Add Testmoniral
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mt-3">
            <Link to={"/addtestimonial"}>
              <a
                href="/"
                className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
              >
                Add Testmoniral
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {testmonials.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <div>
                      <span className="block text-gray-700 text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.description}
                  </td>

                  <td className="text-right px-6 whitespace-nowrap">
                    <Link
                      to={`/testmoniral-edit/${item._id}`}
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTestimonial(item._id)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      {deleting ? "Deleting" : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Testmoniral;
