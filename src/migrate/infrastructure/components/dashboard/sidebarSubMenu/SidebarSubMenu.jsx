import Item from "../../atomic/Item";
import { NavLink } from "react-router-dom";
import "./SidebarSubMenu.css"

const SidebarSubMenu = ({ text, icon, selected, onClick, href }) => {
  return (
    <NavLink end
      to={href}
      className="flex justify-between py-2 pl-6 select-none hover:border-l-2 hover:bg-secondary-dark border-primary-light cursor-normal"
      onClick={onClick}
    >
      <Item icon={icon} text={text} />
    </NavLink>
  );
};

export default SidebarSubMenu;
