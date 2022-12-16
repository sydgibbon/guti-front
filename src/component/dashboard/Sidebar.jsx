import "../../style/dashboard/Sidebar.css";
import logo from "../../images/guti-logo.png";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";
import { appItems } from "../../contexts/AppItems";
import SidebarSubMenu from "./SidebarSubMenu";

function SideBar() {
  const [selected, setSelected] = useState(false);
  const [submenuSelected, setSubMenuSelected] = useState(false);
  const toggleSubMenu = (state) => {
    setSubMenuSelected(state);
  };

  const iconStyles = 
    {
      style: "block my-auto",
      size: "",
    }
  

  return (
    <>
      <div className="hidden md:flex h-screen flex-col w-1/6 h-screen bg-light-gray shadow-sm">
        <div className="logo-section bg-primary-light px-3 py-4 shadow-inner shadow-sm">
          <img src={logo} alt="guti-logo" className="md:p-2 xl:px-5 logo-img" />
        </div>
        <div className="py-2 mt-2 flex-col overflow-y-auto">
          {appItems[0].itemContent.map((app) => (
            <SidebarMenu
              text={app.name}
              icon={app.icon(iconStyles.style)}
              subMenu={app.itemContent ? app.itemContent.map((submenu) => (
                <SidebarSubMenu
                  text={submenu.name}
                  icon={submenu.icon(iconStyles.style, iconStyles.size)}
                  selected={submenuSelected}
                  onClick={() => toggleSubMenu(submenu.name)}
                  href={submenu.link}
                />
              )):""}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
