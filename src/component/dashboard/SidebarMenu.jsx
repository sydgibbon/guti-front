import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import Item from "../atomic/Item";

const SidebarMenu = ({ text, icon, subMenu }) => {
  const [selected, setSelected] = useState("");
  const toggle = () => setSelected(!selected)
  return (
    <>
      <div
        className={` py-2 px-3 flex justify-between hover:border-l-2 border-primary-light cursor-normal select-none ${selected && "shadow-md border-l-2"} `}
        onClick={toggle}
      >
        <Item icon={ icon } text={ text }/>
        <BsChevronCompactDown className="block my-auto" />
      </div>
      {selected && subMenu}
    </>
  );
};

export default SidebarMenu;
