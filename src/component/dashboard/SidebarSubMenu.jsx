import React from 'react';

const SidebarSubMenu = ({text, icon}) => {
  return (
    <div className="py-2 pl-6 flex justify-between hover:border-l-2 border-primary-light cursor-normal select-none">
      <div className="flex text-ellipsis">
        {icon}
        <p className="pl-2">{text}</p>
      </div>
    </div>
  )
}

export default SidebarSubMenu