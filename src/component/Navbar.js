import React from 'react'
import {
  BsHouse,
  BsSearch,
  BsChevronCompactDown,
} from "react-icons/bs";
import user from '../images/user.png';

import '../style/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-section absolute right-0 w-5/6 h-12 bg-light-gray flex'>
      <div className='breacrumb-section w-3/5 my-auto pl-2'>
        <BsHouse className='inline' />
        <span className='text-sm ml-2 inline'>Home</span >
      </div>
      <div className='search-section flex flex-col justify-center w-1/5 my-2'>
        <div className='search-bar bg-white flex justify-between rounded-lg h-full border border-primary-dark'>
          <input type='text' placeholder='Search' className='search-input ml-2'></input>
          <button className='block'>
            <BsSearch className='mr-2'/>
          </button>
          
        </div>
      </div>
      <div className='user-section w-1/5 flex my-auto justify-around ml-2'>
        <div className='user-name flex flex-col my-auto'>
          <span className='text-sm'>Super Admin</span>
          <span className='text-xs'>GUTI User</span>

        </div>
        <div className='user-options flex'>
          <img src={user} alt='User'/>
          <BsChevronCompactDown className='my-auto ml-2'/>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar