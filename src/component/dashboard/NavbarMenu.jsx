import React from 'react';
import { TbPlus, TbSearch, TbStar, TbTemplate } from 'react-icons/tb';

const NavbarMenu = () => {
  return (
    <div className='navbar-menu w-1/2 flex items-center gap-1 ml-2'>
      <div className='add-button px-1 py-0.5 rounded border-orange-dark border-2 bg-primary-light text-light-gray cursor-pointer hover:border-black '>
        <TbPlus className='stroke-current' />
      </div>
      <div className='search-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
        <TbSearch className='stroke-current' />
      </div>
      <div className='lists-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
        <TbStar className='stroke-current' />
      </div>
      <div className='templates-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
        <TbTemplate className='stroke-current' />
      </div>
    </div>
  )
}

export default NavbarMenu