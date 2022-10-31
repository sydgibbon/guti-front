import '../../style/dashboard/Sidebar.css'
import logo from "../../images/guti-logo.png";
import SidebarMenu from './SidebarMenu';
import AssetsSubMenu from './assets/AssetsSubMenu';
import {
  BsBoxSeam,
  BsHeadset,
  BsWallet2,
  BsBriefcase,
  BsShieldCheck,
  BsGear,
} from "react-icons/bs";
import { useState } from 'react';

function SideBar() {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="flex h-screen flex-col w-1/6 h-screen bg-light-gray shadow-sm">
        <div className="logo-section bg-primary-light px-3 py-4 shadow-inner shadow-sm">
          <img src={logo} alt="guti-logo" className="md:p-2 xl:px-5 logo-img" />
        </div>
        <div className="py-2 mt-2 flex-col overflow-y-auto">
          <SidebarMenu text="Assets" icon= {<BsBoxSeam className="block my-auto" />} subMenu={<AssetsSubMenu />} selected={selected} setSelected = {setSelected} />
          <SidebarMenu text="Assistance" icon= {<BsHeadset className="block my-auto" />} selected={selected} setSelected = {setSelected}/>
          <SidebarMenu text="Management" icon= {<BsWallet2 className="block my-auto" />} selected={selected} setSelected = {setSelected}/>
          <SidebarMenu text="Tools" icon= {<BsBriefcase className="block my-auto" />} selected={selected} setSelected = {setSelected}/>
          <SidebarMenu text="Administration" icon= {<BsShieldCheck className="block my-auto" />} selected={selected} setSelected = {setSelected}/>
          <SidebarMenu text="Setup" icon= {<BsGear className="block my-auto" />} selected={selected} setSelected = {setSelected}/>
        </div>
      </div>
    </>
  );
}

export default SideBar;
