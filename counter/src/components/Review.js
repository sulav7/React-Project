import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import ReviewData from "./ReviewData";
import "./Review.css";
import { AiFillStar } from "react-icons/ai";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { Username, image, Review, Star1, Star2, Star3, Star4 } =
    ReviewData[index];
  const checkIndex = (number) => {
    if (number > ReviewData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return ReviewData.length - 1;
    }
    return number;
  };
  const preReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  console.log("This is start1", Star1);
  return (
    <div className='container'>
      <h1 style={{ textAlign: "center" }}>User Reviews</h1>

      <div className=''>
        <div className='left'>
          <FcPrevious
            style={{ fontSize: "70px", cursor: "pointer", marginTop: "100px" }}
            onClick={preReview}
            title='previous'
          />
        </div>
        <div className='left'>
          <img src={image} style={{ borderRadius: "50%", marginTop: "55px" }} />
          <p style={{ fontSize: "25px", color: "green" }}>{Username}</p>
          <p style={{ fontSize: "15px" }}>
            <FaQuoteLeft />
            {Review}
            <FaQuoteRight />
          </p>
          <p style={{ color: "orange" }}>
            {Array(Math.round(Star1))
              .fill("")
              .map((_, i) => (
                <AiFillStar key={i} />
              ))}
          </p>
          <br />
        </div>

        <div className='left'>
          <FcNext
            style={{ fontSize: "70px", cursor: "pointer", marginTop: "100px" }}
            onClick={nextReview}
            title='next'
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
