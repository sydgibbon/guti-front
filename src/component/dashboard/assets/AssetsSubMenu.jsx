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
        href="/assets/computers"
      />
      <SidebarSubMenu
        text="Monitors"
        icon={<BsDisplay className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Monitors") }
        href="/assets/monitors"
      />
      <SidebarSubMenu
        text="Software"
        icon={<TbApps className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Software") }
        href="/assets/software"
      />
      <SidebarSubMenu
        text="Network devices"
        icon={<TbSitemap className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Network devices") }
        href="/assets/network-devices"
      />
      <SidebarSubMenu
        text="Devices"
        icon={<TbUsb className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Devices") }
        href="/assets/devices"
      />
      <SidebarSubMenu
        text="Printers"
        icon={<TbPrinter className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Printers") }
        href="/assets/printers"
      />
      <SidebarSubMenu
        text="Cartridges"
        icon={<TbDropletFilled2 className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Cartridges") }
        href="/assets/cartridges"
      />
      <SidebarSubMenu
        text="Consumables"
        icon={<BsBoxSeam className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Consumables") }
        href="/assets/consumables"
      />
      <SidebarSubMenu
        text="Phones"
        icon={<TbPhone className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Phones") }
        href="/assets/phones"
      />
      <SidebarSubMenu
        text="Racks"
        icon={<TbServer className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Racks") }
        href="/assets/racks"
      />
      <SidebarSubMenu
        text="Enclosures"
        icon={<TbColumns className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Enclosures") }
        href="/assets/enclosures"
      />
      <SidebarSubMenu text="PDUs" icon={<TbPlug className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("PDUs") } 
        href="/assets/pdus" />
      <SidebarSubMenu
        text="Passive devices"
        icon={<TbBrowser className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Passive devices") }
        href="/assets/passive-devices"
      />
      <SidebarSubMenu
        text="Unmanaged devices"
        icon={<TbQuestionMark className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Unmanaged devices") }
        href="/assets/unmanaged-devices"
      />
      <SidebarSubMenu
        text="Cables"
        icon={<TbLine className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Cables") }
        href="/assets/cables"
      />
      <SidebarSubMenu
        text="Simcards"
        icon={<TbFileBarcode className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Simcards") }
        href="/assets/simcards"
      />
      <SidebarSubMenu
        text="Global"
        icon={<TbList className="block my-auto" />}
        selected={ isSelected }
        onClick={ () => toggle("Global") }
        href="/assets/global"
      />
    </>
  );
};

export default AssetsSubMenu;
