import React from "react";
import Item from "../atomic/Item";
import { NavLink } from "react-router-dom";
import "../../style/dashboard/SidebarSubMenu.css"

const SidebarSubMenu = ({ text, icon, selected, onClick, href }) => {
  return (
    <NavLink
      to={href}
      className="py-2 pl-6 flex justify-between hover:border-l-2 hover:bg-secondary-dark border-primary-light cursor-normal select-none"
      onClick={onClick}
    >
      <Item icon={icon} text={text} />
    </NavLink>
  );
};

export default SidebarSubMenu;
