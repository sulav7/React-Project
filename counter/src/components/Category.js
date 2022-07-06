import React from "react";
import "../components/Review.css";
const Category = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
