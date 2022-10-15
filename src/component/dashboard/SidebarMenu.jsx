import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const SidebarMenu = ({ text, icon, subMenu }) => {
  const [selected, setSelected] = useState("");
  const toggle = () => setSelected(!selected)
  return (
    <>
      <div
        className={` py-2 px-3 flex justify-between hover:border-l-2 border-primary-light cursor-normal select-none ${selected && "shadow-md border-l-2"} `}
        onClick={toggle}
      >
        <div className="flex text-ellipsis">
          {icon}
          <p className="pl-2">{text}</p>
        </div>
        <BsChevronCompactDown className="block my-auto" />
      </div>
      {selected && subMenu}
    </>
  );
};

export default SidebarMenu;
