import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddFaqs = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [deleting, setdeleting] = useState();

  const createFaqs = async (e) => {
    e.preventDefault();
    setdeleting(true);
    const response = await axios.post("http://localhost:4000/api/faqs", {
      question: question,
      answer: answer,
    });
    toast.success("Created Success");
    console.log(response);
    setdeleting(false);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={createFaqs} className=" flex flex-col gap-4 py-10 px-10">
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter Your Question"
        required
      />
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        placeholder="Enter Your Answer"
        required
      />
      <button type="submit" className=" bg-blue-500 text-white py-2">
        {deleting ? "Creating" : "create"}
      </button>
    </form>
  );
};

export default AddFaqs;
