import React from "react";
// import burger from "../assests/burger.jpg";
import "../components/Review.css";
const Menu = ({ img, price, title }) => {
  return (
    <div className=''>
      <div className='box'>
        <div className='menu-card'>
          <div className='menu-image'>
            <img src={img} />
          </div>
          <div className='menu-title'>
            <h1>{title}</h1>
          </div>
          <span className='price'>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
