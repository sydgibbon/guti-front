import React from "react";
import SidebarSubMenu from "../SidebarSubMenu";
import { BsBoxSeam, BsDisplay, BsLaptop, BsSpeedometer } from "react-icons/bs";
import {
  TbApps,
  TbBrowser,
  TbColumns,
  TbDropletFilled2,
  TbFileBarcode,
  TbLine,
  TbList,
  TbPhone,
  TbPlug,
  TbPrinter,
  TbQuestionMark,
  TbServer,
  TbSitemap,
  TbUsb,
} from "react-icons/tb";

const AssetsSubMenu = () => {
  return (
    <>
      <SidebarSubMenu
        text="Dashboard"
        icon={<BsSpeedometer className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Computers"
        icon={<BsLaptop className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Monitors"
        icon={<BsDisplay className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Software"
        icon={<TbApps className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Network devices"
        icon={<TbSitemap className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Devices"
        icon={<TbUsb className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Printers"
        icon={<TbPrinter className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Cartridges"
        icon={<TbDropletFilled2 className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Consumables"
        icon={<BsBoxSeam className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Phones"
        icon={<TbPhone className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Racks"
        icon={<TbServer className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Enclosures"
        icon={<TbColumns className="block my-auto" />}
      />
      <SidebarSubMenu text="PDUs" icon={<TbPlug className="block my-auto" />} />
      <SidebarSubMenu
        text="Passive devices"
        icon={<TbBrowser className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Unmanaged devices"
        icon={<TbQuestionMark className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Cables"
        icon={<TbLine className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Simcards"
        icon={<TbFileBarcode className="block my-auto" />}
      />
      <SidebarSubMenu
        text="Global"
        icon={<TbList className="block my-auto" />}
      />
    </>
  );
};

export default AssetsSubMenu;
