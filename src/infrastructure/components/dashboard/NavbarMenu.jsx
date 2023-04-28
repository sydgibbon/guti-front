
import { TbPlus, TbSearch, TbStar, TbTemplate } from 'react-icons/tb';
import { Link, useLocation } from "react-router-dom";
import { appItems } from '../../contexts/AppItems';
import Tooltip from '@mui/material/Tooltip';

const NavbarMenu = () => {

  let itemLink = useLocation().pathname.replace('http://localhost:3000', '');
  let item = appItems[0].itemContent[0].itemContent.filter(item => {
    return item.link === itemLink;
  })[0];


  return (
    <div className='flex items-center gap-1 ml-2 navbar-menu'>
      {
        (item?.formLink ? (<>
          <Tooltip title="Form">
            <Link to={item.formLink} className='add-button px-1 py-0.5 rounded border-orange-dark border-2 bg-primary-light text-light-gray cursor-pointer hover:border-black '>
              <TbPlus className='stroke-current' />
            </Link>
          </Tooltip>
          <Tooltip title="Search">
          <div className='search-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
            <TbSearch className='stroke-current' />
          </div>
          </Tooltip>
          <Tooltip title="Lists">
          <div className='lists-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
            <TbStar className='stroke-current' />
          </div>
          </Tooltip>
          <Tooltip title="Templates">
          <div className='templates-button px-1 py-0.5 rounded border-black border-2 hover:bg-primary-light cursor-pointer text-black hover:text-white'>
            <TbTemplate className='stroke-current' />
          </div>
          </Tooltip>
        </>
        ) : '')
      }

    </div>
  )
}

export default NavbarMenu