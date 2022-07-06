import React, { useState } from "react";
import Category from "./Category";
import Menu from "./Menu";
import MenuData from "./MenuData";
import "../components/Review.css";
const allCategories = [
  "all",
  ...new Set(MenuData.map((item) => item.category)),
];
console.log(allCategories);
const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState(MenuData);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    console.log("this si catetgory", category);
    if (category === "all") {
      setMenuItems(MenuData);
      return;
    }
    const newItems = MenuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className='container'>
      <h1>Menu</h1>
      <div className='row'>
        <div className='category'>
          <Category categories={categories} filterItems={filterItems} />
        </div>
        {menuItems.map((e) => (
          <div className='col-lg-3'>
            <Menu img={e?.img} price={e?.price} title={e?.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
