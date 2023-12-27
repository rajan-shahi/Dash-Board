import axios from "axios";
import React, { useState } from "react";

const AddFaqs = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const createFaqs = async () => {
    const response = await axios.post("http://localhost:4000/api/faqs", {
      question: question,
      answer: answer,
    });
    console.log(response);
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
      <button onClick={createFaqs} className=" bg-blue-500 text-white py-2">Creater</button>
    </div>
  );
};

export default AddFaqs;
