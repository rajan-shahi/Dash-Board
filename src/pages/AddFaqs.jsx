import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddFaqs = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [deleting, setdeleting] = useState();

  const createFaqs = async () => {
    setdeleting(true)
    const response = await axios.post("http://localhost:4000/api/faqs", {
      question: question,
      answer: answer,
    });
  {  
    response.status === 201 && toast.success(response.data.msg);}
    console.log(response);
    setdeleting(false)
    setQuestion("")
    setAnswer("")
  };

  return (
    <div className=" flex flex-col gap-4 py-10 px-10">
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="  px-2 border  border-blue-400 py-3 "
        type="text"
        placeholder="Enter Your Question"
      />
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        placeholder="Enter Your Answer"
      />
      <button onClick={createFaqs} className=" bg-blue-500 text-white py-2">
       {deleting ? "Creating" :"create"}
      </button>
    </div>
  );
};

export default AddFaqs;
