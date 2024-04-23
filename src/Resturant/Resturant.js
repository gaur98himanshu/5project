import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuAPI.js";
import Menucard from "./Menucard.js";
import Navbar from "./Navbar.js";

const Resturant = () => {
  const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];

  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setmenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );
};

export default Resturant;
