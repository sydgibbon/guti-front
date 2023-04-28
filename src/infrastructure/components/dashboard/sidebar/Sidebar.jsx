import "./Sidebar.css";
import logo from "../../../assets/guti-logo.png";
import SidebarMenu from "../SidebarMenu";
import { useState } from "react";
import { appItems } from "../../../contexts/AppItems"
import SidebarSubMenu from "../sidebarSubMenu/SidebarSubMenu";

function SideBar() {
  const [selected, setSelected] = useState(false);
  const [submenuSelected, setSubMenuSelected] = useState(false);
  const toggleSubMenu = (state) => {
    setSubMenuSelected(state);
  };

  const iconStyles = {
    style: "block my-auto",
    size: "",
  };

  return (
    <>
      <div className="flex-col hidden w-1/6 h-screen shadow-sm md:flex bg-light-gray">
        <div className="px-3 py-4 shadow-sm shadow-inner logo-section bg-primary-light">
          <img src={logo} alt="guti-logo" className="md:p-2 xl:px-5 logo-img" />
        </div>
        <div className="flex-col py-2 mt-2 overflow-y-auto">
          {appItems[0].itemContent.map((app) => (
            <SidebarMenu
              key={app.name}
              text={app.name}
              icon={app.icon(iconStyles.style)}
              subMenu={
                app.itemContent
                  ? app.itemContent.map((submenu) => (
                      <SidebarSubMenu
                        key={submenu.name}
                        text={submenu.name}
                        icon={submenu.icon(iconStyles.style, iconStyles.size)}
                        selected={submenuSelected}
                        onClick={() => toggleSubMenu(submenu.name)}
                        href={submenu.link}
                      />
                    ))
                  : ""
              }
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
