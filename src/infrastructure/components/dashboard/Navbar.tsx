import { BsSearch, BsChevronCompactDown } from "react-icons/bs";
import Breadcrumb from "../atomic/Breadcrumb";
import NavbarMenu from "./NavbarMenu";

function Navbar() {
  return (
    <div className="flex justify-between w-full h-12 border-b navbar-section bg-light-gray border-secondary-dark">
      <div className="flex items-center w-1/2 pl-2 breadcrumb-section">
        <div className="flex items-center w-3/5 h-full border-r breadcrumb-content border-secondary-dark">
          <Breadcrumb />
        </div>
        <NavbarMenu />
      </div>
      <div className="flex justify-end w-1/2">
        <div className="flex flex-col justify-center my-1 mr-4 search-section">
          <div className="flex justify-between h-full bg-white rounded search-bar border-1 border-primary-dark">
            <input
              type="text"
              placeholder="Search"
              className="px-2 ml-2 placeholder-current bg-white outline-none search-input"
            ></input>
            <button className="block">
              <BsSearch className='mr-2' />
            </button>
          </div>
        </div>
        <div className="flex justify-around my-auto ml-2 user-section">
          <div className="flex flex-col my-auto mr-2 user-name">
            <span className="text-sm">Super Admin</span>
            <span className="text-xs">GUTI User</span>
          </div>
          <div className="flex user-options">
            {/* <img src={user} alt="User" /> */}
            <BsChevronCompactDown className='my-auto ml-2' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
