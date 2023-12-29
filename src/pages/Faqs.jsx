import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Faqs = () => {
  const [deleting, setdeleting] = useState(false);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqsAllItems = async () => {
      const respones = await axios.get("http://localhost:4000/api/faqs");
      setFaqs(respones.data.data);
    };
    fetchFaqsAllItems();
  }, []);

  const deleteFaqs = async (_id) => {
    setdeleting(true);
    const response = await axios.delete(
      `http://localhost:4000/api/faqs/${_id}`
    );
    toast.success("Delete Success");
    console.log(response);
    setdeleting(false);
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Add Faqs
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 ">
          <Link
            to={"/addfaqs"}
            href=""
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add Question
          </Link>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="  text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Question</th>
              <th className="py-3 px-6">Answer</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {faqs.map((faq, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{faq.question}</td>
                <td className="px-6 py-4 whitespace-nowrap">{faq.answer}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="/"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => deleteFaqs(faq._id)}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    {deleting ? "Deleting" : "delete"}
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

export default Faqs;
