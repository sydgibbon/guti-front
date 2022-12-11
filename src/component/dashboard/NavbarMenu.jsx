import React from 'react';
import { TbPlus, TbSearch, TbStar, TbTemplate } from 'react-icons/tb';
import { Link, useLocation } from "react-router-dom";
import { appItems } from '../../contexts/AppItems';

const NavbarMenu = () => {

  let itemLink = useLocation().pathname.replace('http://localhost:3000', '');
  let item = appItems[0].itemContent[0].itemContent.filter(item => {
    return item.link === itemLink;
  })[0];


  return (
    <div className='navbar-menu flex items-center gap-1 ml-2'>
      {
        (item?.formLink ? (<>
          <Link to={item.formLink} className='add-button px-1 py-0.5 rounded border-orange-dark border-2 bg-primary-light text-light-gray cursor-pointer hover:border-black '>
            <TbPlus className='stroke-current' />
          </Link>
               <div className='search-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
               <TbSearch className='stroke-current' />
             </div>
             <div className='lists-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
               <TbStar className='stroke-current' />
             </div>
             <div className='templates-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
               <TbTemplate className='stroke-current' />
             </div>
             </>
        ) : '')
      }

    </div>
  )
}

export default NavbarMenu