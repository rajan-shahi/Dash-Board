import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Edid = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchFaqsAllItems = async () => {
      const respones = await axios.get(`http://localhost:4000/api/faqs/${id}`);
      setFaq(respones.data.data);
    };
    fetchFaqsAllItems();
  }, [id]);

  console.log(faq);

  return (
    <form className=" flex flex-col gap-4 py-10 px-10">
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        defaultValue={faq.question}
        placeholder="Enter Your Question"
        required
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        defaultValue={faq.answer}
        placeholder="Enter Your Answer"
        required
      />
      <p>{faq.createdAt}</p>
      <p>{faq.updatedAt}</p>
      <button type="submit" className=" bg-blue-500 text-white py-2">
        create
      </button>
    </form>
  );
};

export default Edid;
