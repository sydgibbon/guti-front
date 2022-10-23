import React from 'react';
import Item from "../atomic/Item";

const SidebarSubMenu = ({text, icon}) => {
  return (
    <div className="py-2 pl-6 flex justify-between hover:border-l-2 border-primary-light cursor-normal select-none">
      <Item icon={ icon } text={ text }/>
    </div>
  )
}

export default SidebarSubMenu