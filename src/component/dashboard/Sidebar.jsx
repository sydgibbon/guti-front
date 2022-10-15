import '../../style/dashboard/Sidebar.css'
import logo from "../../images/guti-logo.png";
import {
  BsBoxSeam,
  BsHeadset,
  BsWallet2,
  BsBriefcase,
  BsShieldCheck,
  BsGear,
  BsChevronCompactDown,
} from "react-icons/bs";

function SideBar() {
  return (
    <>
      <div className="flex h-screen flex-col w-1/6 h-screen bg-light-gray shadow-sm">
        <div className="logo-section bg-primary-light px-3 py-4 shadow-inner shadow-sm">
          <img src={logo} alt="guti-logo" className="md:p-2 xl:px-5 logo-img" />
        </div>
        <div className="py-2 mt-2 flex-col overflow-y-auto">
          <div className="py-2 px-3 flex justify-between hover:border-l-2 border-primary-light">
            <div className="flex text-ellipsis">
              <BsBoxSeam className="block my-auto" />
              <p className="pl-2">Assets</p>
            </div>
            <BsChevronCompactDown className="block my-auto" />
          </div>
          <div className="py-2 px-3 flex justify-between hover:border-l-2 border-primary-light hover:border-left border-primary-light">
            <div className="flex">
              <BsHeadset className="block my-auto" />
              <p className="pl-2">Assistance</p>
            </div>
            <BsChevronCompactDown className="block my-auto" />
          </div>
          <div className="py-2 px-3 flex justify-between hover:border-l-2 border-primary-light hover:border-left border-primary-light">
            <div className="flex">
              <BsWallet2 className="block my-auto" />
              <p className="pl-2">Management</p>
            </div>
            <BsChevronCompactDown className="block my-auto" />
          </div>
          <div className="py-2 px-3 flex justify-between hover:border-l-2 border-primary-light hover:border-left border-primary-light">
            <div className="flex">
              <BsBriefcase className="block my-auto" />
              <p className="pl-2">Tools</p>
            </div>
            <BsChevronCompactDown className="block my-auto" />
          </div>
          <div className="py-2 px-3 flex justify-between hover:border-l-2 border-primary-light hover:border-left border-primary-light">
            <div className="flex">
              <BsShieldCheck className="block my-auto" />
              <p className="pl-2">Administration</p>
            </div>{" "}
            <BsChevronCompactDown className="block my-auto" />
          </div>
          <div className="py-2 px-3 flex justify-between hover:border-l-2 border-primary-light hover:border-left border-primary-light">
            <div className="flex">
              <BsGear className="block my-auto" />
              <p className="pl-2">Setup</p>
            </div>{" "}
            <BsChevronCompactDown className="block my-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
