import { BsChevronCompactDown } from "react-icons/bs";
import Item from "../atomic/Item";

const SidebarMenu = ({ text, icon, subMenu, selected, setSelected, arrow, context }) => {
  const toggle = () => {selected !== text ? setSelected(text) : setSelected(false)}
  return (
    <>
      <div
        className={`py-2 px-3 flex justify-between hover:border-l-2 border-primary-light cursor-normal select-none 
        ${context === "edditAsset" ? 
          selected === text && "shadow-md border-l-2"
          :
          selected === text && "border-l-2 bg-white"

        } 
        `}
        onClick={toggle}
      >
        <Item icon={icon} text={text} />
        {arrow && <BsChevronCompactDown className="block my-auto" />}
      </div>
      {selected === text && subMenu}
    </>
  );
};

export default SidebarMenu;
