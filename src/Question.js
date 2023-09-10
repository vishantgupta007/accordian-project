import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  const showBtn = () => {
    setShow((prev) => !prev);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={showBtn}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <div className={`info ${show ? "show" : ""}`}>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Question;


// alternative for {info} without transition => 
// {show && <p>{info}</p> }
