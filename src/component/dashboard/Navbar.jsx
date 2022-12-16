import React from 'react'
import {
  BsSearch,
  BsChevronCompactDown,
} from "react-icons/bs";
import user from '../../images/user.png';
import Breadcrumb from '../atomic/Breadcrumb';
import NavbarMenu from './NavbarMenu';
import Tooltip from '@mui/material/Tooltip';


function Navbar() {
  return (
    <div className='navbar-section w-full h-12 bg-light-gray flex justify-between border-b border-secondary-dark'>
      <div className='breadcrumb-section w-1/2 pl-2 items-center flex'>
        <div className='breadcrumb-content w-3/5 flex items-center border-r border-secondary-dark h-full'>
          <Breadcrumb />
        </div>
        <NavbarMenu />
      </div>
      <div className='flex w-1/2 justify-end'>
        <div className='search-section flex flex-col justify-center my-1 mr-4'>
          <div className='search-bar bg-white justify-between rounded h-full border-1 border-primary-dark flex'>
            <input type='text' placeholder='Search' className='search-input ml-2 placeholder-current px-2 outline-none bg-white'></input>
            <button className='block'>
              <BsSearch className='mr-2' />
            </button>

          </div>
        </div>
        <div className='user-section flex my-auto justify-around ml-2'>
          <div className='user-name flex flex-col my-auto mr-2'>
            <span className='text-sm'>Super Admin</span>
              <span className='text-xs'>GUTI User</span>
          </div>
          <div className='user-options flex'>
            <img src={user} alt='User' />
            <BsChevronCompactDown className='my-auto ml-2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar