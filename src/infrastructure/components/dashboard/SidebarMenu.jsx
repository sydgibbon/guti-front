import { BsChevronCompactDown } from "react-icons/bs";
import Item from "../atomic/Item";

const SidebarMenu = ({ text, icon, subMenu, selected, setSelected, arrow }) => {
  const toggle = () => {selected !== text ? setSelected(text) : setSelected(false)}
  return (
    <>
      <div
        className={` py-2 px-3 flex justify-between hover:border-l-2 border-primary-light cursor-normal select-none ${selected === text && "shadow-md border-l-2"} `}
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
