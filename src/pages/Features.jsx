import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Features = () => {
  const [refresh, setrefresh] = useState();
  const [deleting, setdeleting] = useState();
  const [features, setfeatures] = useState([]);

  useEffect(() => {
    const featchFeaturesData = async () => {
      const respones = await axios.get("http://localhost:4000/api/features");
      setfeatures(respones.data.data);
    };
    featchFeaturesData();
    setrefresh(0);
  }, [refresh]);

  const deleteFeaturesItems = async (_id) => {
    setdeleting(true);
    const respones = await axios.delete(
      `http://localhost:4000/api/features/${_id}`
    );
    setrefresh(1);
    console.log(respones);
    toast.success("Delete Success");
    setdeleting(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Features
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3">
          <Link
            to={"/addfeatures"}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add Features
          </Link>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {features.map((feature, idx) => (
              <tr key={idx}>
                <td className="flex features-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {feature.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    alt=""
                    src={feature.image}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {feature.description}
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="/"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => deleteFeaturesItems(feature._id)}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    {deleting ? "deleting" : "delete"}
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

export default Features;
