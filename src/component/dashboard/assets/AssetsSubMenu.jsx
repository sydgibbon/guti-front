import React, { useState } from "react";
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
  const [isSelected, setIsSelected] = useState(false);
  const toggle = (state) => {
    console.log(state);
    setIsSelected(state);
  };
  return (
    <>
      <SidebarSubMenu
        text="Dashboard"
        icon={<BsSpeedometer className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Dashboard") }
        href="/assets"
      />
      <SidebarSubMenu
        text="Computers"
        icon={<BsLaptop className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Computers") }
        href="/computers"
      />
      <SidebarSubMenu
        text="Monitors"
        icon={<BsDisplay className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Monitors") }
        href="/monitors"
      />
      <SidebarSubMenu
        text="Software"
        icon={<TbApps className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Software") }
        href="/software"
      />
      <SidebarSubMenu
        text="Network devices"
        icon={<TbSitemap className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Network devices") }
        href="/network-devices"
      />
      <SidebarSubMenu
        text="Devices"
        icon={<TbUsb className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Devices") }
        href="/devices"
      />
      <SidebarSubMenu
        text="Printers"
        icon={<TbPrinter className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Printers") }
        href="/printers"
      />
      <SidebarSubMenu
        text="Cartridges"
        icon={<TbDropletFilled2 className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Cartridges") }
        href="/cartridges"
      />
      <SidebarSubMenu
        text="Consumables"
        icon={<BsBoxSeam className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Consumables") }
        href="/consumables"
      />
      <SidebarSubMenu
        text="Phones"
        icon={<TbPhone className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Phones") }
        href="/phones"
      />
      <SidebarSubMenu
        text="Racks"
        icon={<TbServer className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Racks") }
        href="/racks"
      />
      <SidebarSubMenu
        text="Enclosures"
        icon={<TbColumns className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Enclosures") }
        href="/enclosures"
      />
      <SidebarSubMenu text="PDUs" icon={<TbPlug className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("PDUs") } 
        href="/pdus" />
      <SidebarSubMenu
        text="Passive devices"
        icon={<TbBrowser className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Passive devices") }
        href="/passive-devices"
      />
      <SidebarSubMenu
        text="Unmanaged devices"
        icon={<TbQuestionMark className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Unmanaged devices") }
        href="/unmanaged-devices"
      />
      <SidebarSubMenu
        text="Cables"
        icon={<TbLine className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Cables") }
        href="/cables"
      />
      <SidebarSubMenu
        text="Simcards"
        icon={<TbFileBarcode className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Simcards") }
        href="/simcards"
      />
      <SidebarSubMenu
        text="Global"
        icon={<TbList className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Global") }
        href="/global"
      />
    </>
  );
};

export default AssetsSubMenu;
