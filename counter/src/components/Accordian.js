import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../components/Review.css";
const Accordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className=''>
      <div className='accord-heading'>
        <div className='accord-body'>
          <h4>
            {question}{" "}
            <button onClick={() => setShow(!show)}>
              {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
            {show && <p>Ans: {answer}</p>}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
